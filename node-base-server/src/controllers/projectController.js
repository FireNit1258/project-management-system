const db = require("../models");
const { Op } = require('sequelize');
const { Project, Category, ProjectImages } = db;
const { uploadMultipleFiles } = require("../helpers/uploadHelper");
const { generate_token, decode_token } = require("../helpers/tokenhelper");
const { projectBasicFormValidation,projectAdvanceFormValidation } = require("../validations/project");


// GET ALL Category
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: [
        {
          model: Category,
          as: "project_category",
          attributes: ["name"],
        },
      ],
      order: [["display_order", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      message: "projects found",
      data: projects,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// GET SINGLE CATEGORY //
const adminSingleProject = async (req, res) => {
  const user_token =    req.header("Authorization") && req.header("Authorization").split(" ")[1];
  // Validate if all fields are provided
  if (!user_token) {
    return res.status(200).json({
      success: false,
      message: "Token is missing, please login again and try this page again.",
      data: null,
    });
  }

  try {
    const token_data = decode_token(user_token);
    

    if (token_data.token_vaild == true) {
      const project_id = req.params.id;
      console.log(project_id)
      const project_data = await Project.findOne({
        where: {
          id: project_id,
        },
      }).then((project_data) => {
        if (project_data) {

            res.status(200).json({
              success: true,
              message: "Project details found !",
              data: project_data,
            });

        } else {
          return res.status(200).json({
            success: false,
            message: "category data not found with given credentials",
            data: null,
          });
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: token_data.message,
        data: null,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

// ADD Category //
const addProject = async (req, res) => {
  const {
    step,
    id,
    project_name,
    category_id,
    project_short_description,
    project_technology,
    completed_duration,
    display_order,
    project_description,
    meta_title,
    meta_keywords,
    project_slug,
  } = req.body;

  try {
    if (id != null && id != "" && id > 0) {
      if (step == 0) {
        const updateData = {
          project_name,
          category_id,
          project_short_description,
          project_technology,
          completed_duration,
          display_order,
          project_description,
        };

        const { error } = projectBasicFormValidation.validate(updateData);
  
        if (error) {
        
          return res.status(200).json({
            success: false,
            message: error.details.map(detail => detail.message),
            data: null,
          });
        }
        const project_data = await Project.update(updateData, {
          where: { id },
        });
        console.log('project_data',project_data)
        if (project_data) {

          const updatedRecord = await Project.findOne({
            where: { id: id },
          });
        
          return res.status(200).json({
            success: true,
            message: "Project Basic details updated successfully",
            data: updatedRecord,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "An error occurred while updating the project",
            data: null,
          });
        }
      }

      if (step == 1) {
        const updateData = {
          meta_title,
          meta_keywords,
          project_slug,
        };

        const { error } = projectAdvanceFormValidation.validate(updateData);
  
        if (error) {
        
          return res.status(200).json({
            success: false,
            message: error.details.map(detail => detail.message),
            data: null,
          });
        }

        const project_data = await Project.update(updateData, {
          where: { id },
        });
        if (project_data) {

          const updatedRecord = await Project.findOne({
            where: { id: id },
          });


          return res.status(200).json({
            success: true,
            message: "Project Advance details updated successfully",
            data: updatedRecord,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "An error occurred while updating the project",
            data: null,
          });
        }
      }
    } else {

      const project_create_data = {
        project_name,
        category_id,
        project_short_description,
        project_technology,
        completed_duration,
        display_order,
        project_description
      }

      const { error } = projectBasicFormValidation.validate(project_create_data);

      if (error) {
      
        return res.status(200).json({
          success: false,
          message: error.details.map(detail => detail.message),
          data: null,
        });
      }

      const project_data = await Project.create(project_create_data);

      if (project_data) {
        return res.status(200).json({
          success: true,
          message: "Project basic details saved successfully",
          data: project_data,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "An error occurred while creating the project",
          data: null,
        });
      }
    }
  } catch (error) {
    console.log("error", error);
    // Handle errors (e.g., validation errors or duplicate email)
    if (error.name === "SequelizeValidationError") {
      return res.status(200).json({
        success: false,
        message: error.message,
        data: null,
      });
    }

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
        data: null,
      });
    }

    // General error handler
    return res.status(200).json({
      success: false,
      message: "An error occurred while creating the user",
      data: null,
    });
  }
};


const updateProject = async (req, res) => {
  const { id, name, parent_id, display_order } = req.body;
  const image_name = req.file.filename;
  // Validate if all fields are provided
  if (!name || !parent_id || !image_name || !display_order) {
    return res.status(200).json({
      success: false,
      message: "Please provide all compulsory data",
      data: null,
    });
  }

  try {
    const updateData = { name, parent_id, display_order };
    if (image_name) {
      updateData.image_name = image_name;
    }

    Project.update(updateData, {
      where: { id },
    })
      .then(([affectedRows]) => {
        console.log("affectedRows", affectedRows);
        if (affectedRows !== 0) {
          res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: null,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "Unable to update profile, please try again",
            data: null,
          });
        }
      })
      .catch((error) => {
        res.status(200).json({
          success: false,
          message: error.message,
          data: null,
        });
      });
  } catch (error) {
    console.log("error", error);
    // Handle errors (e.g., validation errors or duplicate email)
    if (error.name === "SequelizeValidationError") {
      return res.status(200).json({
        success: false,
        message: error.message,
        data: null,
      });
    }

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(200).json({
        success: false,
        message: "Email already exists",
        data: null,
      });
    }

    // General error handler
    res.status(200).json({
      success: false,
      message: "An error occurred while creating the user",
      data: null,
    });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.body;
  // Validate if all fields are provided
  try {
    const deletedCount = await Project.destroy({ where: { id: id } });

    if (deletedCount === 0) {
      return res.status(200).json({
        success: false,
        message: "record not found in database to delete",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "record has been deleted successfully!",
      data: null,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const projectImages = async (req, res) => {
  const user_token =    req.header("Authorization") && req.header("Authorization").split(" ")[1];
  // Validate if all fields are provided
  if (!user_token) {
    return res.status(200).json({
      success: false,
      message: "Token is missing, please login again and try this page again.",
      data: null,
    });
  }

  try {
    const token_data = decode_token(user_token);
    

    if (token_data.token_vaild == true) {
      const project_id = req.params.id;
      console.log(project_id)
      const project_images_data = await ProjectImages.findAll({
        where: {
          project_id: project_id,
        },
      }).then((project_images_data) => {
        if (project_images_data) {

            res.status(200).json({
              success: true,
              message: "Project Images found !",
              data: project_images_data,
            });

        } else {
          return res.status(200).json({
            success: false,
            message: "category data not found with given credentials",
            data: null,
          });
        }
      });
    } else {
      return res.status(200).json({
        success: false,
        message: token_data.message,
        data: null,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const addProjectImages = async (req, res) => {


  uploadMultipleFiles(req, res, (err) => {

    if (err) {
      return res.status(200).json({
        success: false,
        message: err.message,
        data: null,
      });
    }

    if (!req.files ) {
      return res.status(200).json({
        success: false,
        message: "No file uploaded",
        data: null,
      });
    }

    const { id,images_count } = req.body;
    const images_data = [];

    console.log('images_count',images_count);

    for (const file of req.files) {
      let imageobj = { project_id: id, image_name: file.filename };
      images_data.push(imageobj);
    }

    if ( images_data.length === 0) {
      res.status(200).json({
        success: true, 
        message: "Project Images not found, please select few images",
        data: null,
      });
    } else {
      const inserted_image_data = ProjectImages.bulkCreate(images_data);
      if (inserted_image_data) {
        res.status(200).json({
          success: true,
          message: "Project Images are saved successfully",
          data: inserted_image_data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "An error occurred while uploading the project images",
          data: null,
        });
      }

    }


  });
};


const getFrontProjects = async (req, res) => {

  const { filter } = req.params;


  try {

    let condition = {}; 

    switch (filter) {
      
      case 'all':
        condition = {};
        break;

      case 'featured':
        condition = { is_featured: '1' };
        break;

      case 'latest':
        condition = { is_featured: '0' }; 
        break;

      default:
        // Check if the filter is a numeric category ID
        if (!isNaN(filter)) {
          condition = { category_id: parseInt(filter, 10) }; 
          
        } else {
          condition = {  project_name: { [Op.like]: `%${filter}%` } }; 
        }
        break;
    }

    const projects = await Project.findAll({
      where: condition,
      include: [
        {
          model: Category,
          as: "project_category",
          attributes: ["name"],
        },
        {
          model: ProjectImages,
          as: 'images',
          attributes: ['id', 'image_name'], // Fetch necessary fields from ProjectImage
        },
      ],
      order: [["display_order", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      message: "projects found",
      data: projects,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = {
  getProjects,
  adminSingleProject,
  addProject,
  updateProject,
  deleteProject,
  addProjectImages,
  projectImages,
  getFrontProjects
};
