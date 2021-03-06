const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const config = require('./../config/appConfig');

const db = {};

let sequelize;
if (config.database.DATABASE_URL) {
  sequelize = new Sequelize(config.database.DATABASE_URL);
} else {
  sequelize = new Sequelize(config.database.dbname, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
}

let tmpdirname = [];
tmpdirname[0] = __dirname;
tmpdirname[1] = __dirname + "/tsa"; 
for (i = 0; i <  tmpdirname.length-1; i++) {
      fs
        .readdirSync(tmpdirname[i])
        .filter(file =>
          (file.indexOf('.') !== 0) &&
          (file !== basename) &&
          (file.slice(-3) === '.js'))
       .forEach((file) => {
              if (file != "schemas.js"){ 
                const model = sequelize.import(path.join(tmpdirname[i] , file));
                db[model.name] = model; 
              }
        });
}
Object.keys(db).forEach((modelName) => {
if (db[modelName].associate) {
    db[modelName].associate(db);
}

});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;
