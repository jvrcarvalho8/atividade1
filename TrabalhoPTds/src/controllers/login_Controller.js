const Usuario = require('../model/usuario');

function loginView(req, res) {
    const erroAutenticacao = req.query.erro_autenticacao === 'true';
    res.render("log.html", { erroAutenticacao });
}

async function autenticar(req, res){
    const usuario = await Usuario.findOne({ where: {
        nome: req.body.nome, 
        senha: req.body.senha}
    });
    if(usuario !== null){
        req.session.autorizado = true;
        req.session.usuario = usuario;
        res.redirect('/home');
    }
    else{
        let erro_autenticacao = true;
        res.render('log.html', {erro_autenticacao});
    }
}

function verificarAutenticacao(req, res, next) {
    if(req.session.autorizado){
        console.log("usuário autorizado");
        next();
    }
    else{
        console.log("usuário NÃO autorizado");
        res.redirect('/');
    }   
}

function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {
    autenticar,
    loginView,
    verificarAutenticacao,
    sair
};