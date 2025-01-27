module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      project_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
        allowNull: true,
      },
      project_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_technology: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      project_short_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      completed_duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      display_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      meta_keywords: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      project_slug: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_featured: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
    },
    {
      tableName: "tbl_projects",
    }
  );

  Project.associate = (models) => {
    Project.belongsTo(models.Category, {
      as: "project_category",
      foreignKey: "category_id",
    });
    Project.hasMany(models.Category, {
      as: "Children",
      foreignKey: "category_id",
    });
    Project.hasMany(models.ProjectImages, { foreignKey: 'project_id', as: 'images' });
  };
  

  return Project;
};
