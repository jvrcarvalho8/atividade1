function calcular(v1, v2, op) {
    let resultado;
    switch (op) {
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            resultado = v1 / v2;
            break;
    }
    return resultado;
}

function nomeOperador(op) {
    let nmOp;
    switch (op) {
        case '+':
            nmOp = "+";
            break;
        case '-':
            nmOp = "-";
            break;
        case '*':
            nmOp = "*";
            break;
        case '/':
            nmOp = "/";
            break;
    }
    return nmOp;
}

module.exports = {
    calcular,
    nmOp
}