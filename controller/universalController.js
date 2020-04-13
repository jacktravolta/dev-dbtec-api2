const got = require('got');
const { SWAPI_BASE_URL } = require('./../config/appConfig');
const uuid = require('uuid');

 
//var { User } = require('../models/index.js'); 

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const config = require('./../config/appConfig');

function extModel(xmodel,xschema)
{

    let sequelize;
    let db = {}
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
   tmpdirname =  "/var/www/api/node-sequelize-rest-api/models/tsa";
   let file = xmodel;
   const model = sequelize.import(path.join(tmpdirname , file));
   db[model.name] = model;
   db.sequelize = sequelize;
   db.Sequelize = Sequelize;
   return(model)
   

}

exports.all = function all(req, res) {
    const order = [['id', 'ASC']];
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
      
    let model  = extModel(req.headers.model) 
    let schema = req.headers.schema; 

    if (!schema){
      model
          .findAll({ order, limit, offset })
          .then(models => res.status(200).json({ error: false, data: models }))
          .catch(err => res.status(500).json({ error: true, message: err.message }));
    }      
    else{
        res.send( data);
    }      
    
};

exports.single = function single(req, res) {
  let model = extModel(req.headers.model) 
  model.findById(req.params.id)
    .then((model) => {
      if (!model) {
        return res.status(400).send({ error: 'Registro no encontrado' });
      }
      return res.status(200).json({ error: false, data: model });
    })
    .catch(err => res.status(500).send({ error: true, message: err.message }));
};


exports.add = async function add(req, res) {
  const { name } = req.body;
  let model = extModel(req.headers.model)  
  try {
      let data = req.body;
      req.body._id = uuid.v4();
      data = req.body
      return model.create(data)
        .then(model => res.status(200).json({ error: false, data: model }))
        .catch(err => res.status(500).json({ error: true, message: err.message }));
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }


};



exports.remove = function remove(req, res) {
  let model = extModel(req.headers.model) 
  model
    .find({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Registro no Encontrado',
        });
      }

      return data
        .destroy()
        .then(() => res.status(200).json({ error: false, data: 'Eliminado' }))
        .catch(err => res.status(500).json({ error: true, message: err.message }));
    })
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};


exports.update = function update(req, res) {
  let model = extModel(req.headers.model) 
  const data = req.body;
  model.update(
    data,
    { returning: true, where: { id: req.params.id } },
  ).then(([rowsUpdate, [updatedaata]]) => {
    if (!rowsUpdate) {
      return res.status(404).send({
        message: 'Planet Not Found',
      });
    }
    return updatedaata;
  }).then(planets => res.status(200).json({ error: false, data: planets }))
    .catch(err => res.status(500).json({ error: true, message: err.message }));
};
