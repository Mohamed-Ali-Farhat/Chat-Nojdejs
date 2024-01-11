const { DataTypes } = require('sequelize');

const Message = (sequelize) => {
  const MessageModel = sequelize.define('Message', {
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER, // Changed to INTEGER from NUMBER
      allowNull: false
    }
  });

  return MessageModel;
};

module.exports = Message;
