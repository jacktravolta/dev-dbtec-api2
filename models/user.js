module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  
    _id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    secret: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    


  });
  return User;
};
