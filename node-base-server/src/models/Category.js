module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('Category', {

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Category',
          key: 'id',
        },
        allowNull: true,
      },
      image_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      display_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_featured: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
    },
    {
      tableName: 'tbl_category', 
  });

  Category.associate = (models) => {
    Category.belongsTo(models.Category, { as: 'parent_category', foreignKey: 'parent_id' });
    Category.hasMany(models.Category, { as: 'Children', foreignKey: 'parent_id' });
  };
  
    return Category;
  };
  