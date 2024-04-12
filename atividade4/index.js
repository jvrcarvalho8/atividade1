
const calculadora = require('./calculadora');
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(`A soma de ${a} e ${b} é ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(`A subtração de ${a} e ${b} é ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(`A multiplicação de ${a} e ${b} é ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.dividir(a, b);
    if (resultado === 'Erro') {
        res.status(400).send('Não é possível dividir por zero');
    } else {
        res.send(`A divisão de ${a} por ${b} é ${resultado}`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});