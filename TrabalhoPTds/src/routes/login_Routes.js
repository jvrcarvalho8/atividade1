const express = require('express');
const router = express.Router();
const login_Controller = require('../controller/login_Controller');

router.get('/', login_Controller.loginView);
router.post('/', login_Controller.autenticar); 
router.get('/sair', login_Controller.sair);
module.exports = router;