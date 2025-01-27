module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define(
    "Settings",
    {
      website_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website_global_meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website_global_meta_keywords: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website_logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      copyright_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_list_page_size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      front_list_page_size: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      from_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      from_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website_address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website_phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      site_on: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      site_down_message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      show_theme_mode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      twitter_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      youtube_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "tbl_website_settings",
    }
  );

  return Settings;
};
