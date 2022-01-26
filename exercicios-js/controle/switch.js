const imprimirResultado2 = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    console.log('Fim!')
}

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.55)
imprimirResultado2(2.3)
imprimirResultado2(-1)
imprimirResultado2(11)