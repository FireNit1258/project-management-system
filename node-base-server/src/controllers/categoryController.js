const db = require("../models");
const { Category } = db;
const {singleImageUpload} = require("../helpers/uploadHelper");
const { generate_token, decode_token } = require("../helpers/tokenhelper");

// GET ALL Category
const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: [
        "id",
        "name",
        "image_name",
        "display_order",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: Category,
          as: "parent_category",
          attributes: ["name"],
        },
      ],
      order: [["display_order", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      message: "category found",
      data: categories,
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
const adminSingleCategory = async (req, res) => {
  console.log(req);
  const user_token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1];
  // Validate if all fields are provided
  if (!user_token) {
    return res.status(200).json({
      success: false,
      message: "Token is missing, please login again and try this page again.",
      data: null,
    });
  }

  try {

      const category_id = req.params.id;
      const category_data = await Category.findOne({
        attributes: ['id', 'name', 'parent_id', 'image_name', 'display_order', 'createdAt', 'updatedAt'],
        where: {
          id: category_id,
        },
      }).then((category_data) => {
        if (category_data) {
          try {
            res.status(200).json({
              success: true,
              message: "Category details found !",
              data: category_data,
            });
          } catch (error) {
            return res.status(200).json({
              success: false,
              message: error.message,
              data: null,
            });
          }
        } else {
          return res.status(200).json({
            success: false,
            message: "category data not found with given credentials",
            data: null,
          });
        }
      });

  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};




// ADD Category //
const addCategory = async (req, res) => {
  singleImageUpload(req, res, (err) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: err.message,
        data: null,
      });
    }

    if (!req.file) {
      return res.status(200).json({
        success: false,
        message: "No file uploaded",
        data: null,
      });
    }

    const { name, parent_id, display_order } = req.body;
    const image_name = req.file.filename;
    // Validate if all fields are provided
    if (!name || !image_name || !display_order) {
      return res.status(200).json({
        success: false,
        message: "Please provide all compulsory data",
        data: null,
      });
    }

    try {
      const category_data = Category.create({
        name,
        parent_id,
        image_name,
        display_order,
      });

      if (category_data) {
        res.status(200).json({
          success: true,
          message: "Category created successfully",
          data: category_data,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "An error occurred while creating the category",
          data: null,
        });
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
      res.status(200).json({
        success: false,
        message: "An error occurred while creating the user",
        data: null,
      });
    }
  });
};


const updateCategory = async (req, res) => {
  singleImageUpload(req, res, (err) => {
    if (err) {
      return res.status(200).json({
        success: false,
        message: err.message,
        data: null,
      });
    }

    if (!req.file) {
      return res.status(200).json({
        success: false,
        message: "No file uploaded",
        data: null,
      });
    }

    const { id, name, parent_id, display_order } = req.body;
    const image_name = req.file.filename;
    // Validate if all fields are provided
    if (!name  || !image_name || !display_order) {
      return res.status(200).json({
        success: false,
        message: "Please provide all compulsory data",
        data: null,
      });
    }

    try {
      const updateData = { name, parent_id,display_order };
      if (image_name) {
        updateData.image_name = image_name;
      }

      Category.update(updateData, {
        where: { id }
      }).then(([affectedRows]) => {
          console.log("affectedRows", affectedRows);
          if (affectedRows !== 0) {
            res.status(200).json({
              success: true,
              message: "Category updated successfully",
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
  });
};


const deleteCategory =  async (req, res) => {
    
  const { id } = req.body;
  // Validate if all fields are provided
  try {
    const deletedCount = await Category.destroy({ where: { id: id } });

    if (deletedCount === 0) {
      return res.status(200).json({
        success: false,
        message: 'record not found in database to delete',
        data: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'record has been deleted successfully!',
      data: null
    });

  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null
    });
  }

};


const getFrontCategory = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: {
        is_featured: '1'
      },
      attributes: [
        "id",
        "name",
        "image_name",
        "display_order",
        "createdAt",
        "updatedAt",
        "is_featured"
      ],
      include: [
        {
          model: Category,
          as: "parent_category",
          attributes: ["name"],
        },
      ],
      order: [["display_order", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      message: "category found",
      data: categories,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getFrontAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: [
        "id",
        "name",
        "image_name",
        "display_order",
        "createdAt",
        "updatedAt",
        "is_featured"
      ],
      include: [
        {
          model: Category,
          as: "parent_category",
          attributes: ["name"],
        },
      ],
      order: [["display_order", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      message: "category found",
      data: categories,
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
  getCategory,
  addCategory,
  adminSingleCategory,
  updateCategory,
  deleteCategory,
  getFrontCategory,
  getFrontAllCategory
};
