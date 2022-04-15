const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserFriends extends Model {
  }
  UserFriends.init(
    {
        user_id: DataTypes.INTEGER,
        friend_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userFriends',
    },
  );
  return UserFriends;
};
