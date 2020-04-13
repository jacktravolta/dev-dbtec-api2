module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tsa_componenteppalaeronaves', {
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
    /*/////////////////////////////////////*/

    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    


  });

  return Model;
};

    