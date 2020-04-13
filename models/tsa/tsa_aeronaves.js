module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Tsa_aeronaves', {
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

    cod_aeronave: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    cod_matricula: {
      type: DataTypes.STRING, 
      allowNull: true, 
    }, 

    horas_vuelo: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    id_tipo_aeronave: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_asignacion_aerea: {
      type: DataTypes.STRING,
      allowNull: true,
    }

   
   
  });

  return Model;
};

