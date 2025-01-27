module.exports = (sequelize, DataTypes) => {
    const NewsletterSubscribers = sequelize.define(
      "NewsletterSubscribers",
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "tbl_email_subscriptions",
      }
    );
  
  
    return NewsletterSubscribers;
  };
  