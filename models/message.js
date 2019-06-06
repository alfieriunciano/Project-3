module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Message;
};
