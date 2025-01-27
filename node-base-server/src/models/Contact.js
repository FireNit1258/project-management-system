module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
      "Contact",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        subject: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
          }
      },
      {
        tableName: "tbl_contactus",
      }
    );
  
  
    return Contact;
  };
  