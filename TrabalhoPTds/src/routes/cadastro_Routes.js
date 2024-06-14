const express = require('express');
const router = express.Router();

const cadastro_Controller = require('../controllers/cadastro_Controller');

router.get('/criar_conta', cadastro_Controller.criarContaView);
router.post('/cadastrar_usuario', cadastro_Controller.cadastrarUsuario);

module.exports = router;