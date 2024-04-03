function transporMatriz(A) {
    console.log("Matriz original:");
    imprimirMatriz(A);

    const linhas = A.length;
    const colunas = A[0].length;

    const transposta = [];
    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = A[i][j];
        }
    }

    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(", "));
    }
    console.log("");
}

// Exemplo de uso
const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(A);