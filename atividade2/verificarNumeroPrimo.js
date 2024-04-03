function verificarNumeroPrimo(n) {
    if (n <= 1) {
        console.log(`false`);

    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(`false`);

        }
    }
    console.log(`true`);
}

verificarNumeroPrimo(0); // false
verificarNumeroPrimo(1); // false
verificarNumeroPrimo(2); // true
verificarNumeroPrimo(3); // true
verificarNumeroPrimo(7); // true
verificarNumeroPrimo(83); // true
verificarNumeroPrimo(100); // false
verificarNumeroPrimo(991); // true
verificarNumeroPrimo(104729); // true
verificarNumeroPrimo(14348907); // false