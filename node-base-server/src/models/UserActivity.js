module.exports = (sequelize, DataTypes) => {
  const UserActivity = sequelize.define('UserActivity', {
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  device_details: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
    tableName: 'tbl_users_activity', 
});

return UserActivity;
};
