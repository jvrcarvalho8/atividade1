const express = require('express');
const app = express();
const porta = 8080;

app.use(express.json());

let estoque = {};

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque[id] = { nome, qtd: parseInt(qtd) };
    res.send(Produto ${nome} adicionado com sucesso!);
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    if (estoque[id]) {
        delete estoque[id];
        res.send(Produto com ID ${id} removido com sucesso!);
    } else {
        res.status(404).send('Produto não encontrado!');
    }
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    if (estoque[id]) {
        estoque[id].qtd = parseInt(qtd);
        res.send(Quantidade do produto ${estoque[id].nome} atualizada para ${qtd}.);
    } else {
        res.status(404).send('Produto não encontrado!');
    }
});

app.listen(porta, () => {
    console.log(Servidor rodando na porta ${porta});
});