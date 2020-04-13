const express = require('express');

const router = express.Router();
const modelController = require('./../../controller/universalController');
const modelService = require('./../../service/universalService');
const tokenService = require('./../../service/tokenService');

router.get(
  '/',
  //tokenService.isBearerAuthenticated,
  modelController.all, 
);

router.post(
  '/', 
  //tokenService.isBearerAuthenticated,
  //modelService.addValidator,
  modelController.add,
);

router.get(
  '/:id',
  //tokenService.isBearerAuthenticated,
  //modelService.singleValidator,
  modelController.single,
);

router.put(
  '/:id',
  tokenService.isBearerAuthenticated,
  //modelService.singleValidator,
  modelController.update,
);

router.delete(
  '/:id',
  tokenService.isBearerAuthenticated, 
  //modelService.singleValidator,
  modelController.remove,
);

module.exports = router;

