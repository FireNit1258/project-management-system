module.exports = (sequelize, DataTypes) => {
    const Pages = sequelize.define(
      "Pages",
      {
        page_title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        page_short_description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        page_description: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        tableName: "tbl_pages",
      }
    );
  
  
    return Pages;
  };
  