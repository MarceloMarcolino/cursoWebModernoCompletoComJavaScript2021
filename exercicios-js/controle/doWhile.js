function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao1 = -1

do {
    opcao1 = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao1}.`)
} while (opcao1 != -1) 

console.log('Até a próxima!')