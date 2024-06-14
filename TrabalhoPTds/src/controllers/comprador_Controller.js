const Usuario = require('../model/usuario');

function home(req, res) {
    Usuario.findByPk(req.session.usuario.id)
    .then((usuario) => {
        if (usuario) {
            res.render("home.html", { nome: usuario.nome });
        } else {
            res.render("home.html", { erro: "Usuário não encontrado" });
        }
    })
    .catch((erro) => {
        res.render("home.html", { erro });
    });
}

module.exports = {
    homeView
};