module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Universal', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
   
  });

  return Model;
};

// {
// 				"climate" : "Arid", - "created" : "2014-12-09T13:50:49.641000Z",
// 				"diameter" : "10465",
// 				"edited" : "2014-12-15T13:48:16.167217Z",
// 				"films" : [
// 								"https://swapi.co/api/films/1/", ...
// 				],
// 				"gravity" : "1",
// 				"name" : "Tatooine",
// 				"orbital_period" : "304",
// 				"population" : "120000",
// 				"residents" : [
// 								"https://swapi.co/api/people/1/", ...
// 				],
// 				"rotation_period" : "23",
// 				"surface_water" : "1",
// 				"terrain" : "Dessert",
// 				"url" : "https://swapi.co/api/planets/1/"
// }
