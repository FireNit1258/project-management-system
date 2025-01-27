module.exports = (sequelize, DataTypes) => {
    const ProjectImages = sequelize.define(
      "ProjectImages",
      {
        project_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Project',
            key: 'id',
          },
        },
        image_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      
      {
        tableName: "tbl_project_images",
      }
    );

    ProjectImages.associate = (models) => {
      ProjectImages.hasMany(models.Project, { as: 'Children', foreignKey: 'id' });
 
    };
    
    return ProjectImages;
  };
  