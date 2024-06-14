const Usuario = require('../models/usuario');


function criarContaView(req, res){
    res.render('usuario_cadastro.html');
}

function cadastrarUsuario(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        senha: req.body.senha,
        
    }

    Usuario.create(usuario).then(()=>{
        let cadastrar_usuario = true;
        res.redirect('/?cadastrar_usuario=true');
    }).catch((err)=>{
        console.log(err);
        let cadastrar_usuarioerr = true;
        res.redirect('/?cadastrar_usuarioerr=false');
    });    

    
}

module.exports = {
    criarContaView,
    cadastrarUsuario
}