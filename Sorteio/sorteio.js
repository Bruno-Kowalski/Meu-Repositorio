const prompt = require('prompt-sync')({ sigint: true });

function sortearComida() {
    prompt("Pressione ENTER para sortear a comida de hoje...");

    const numeroSorteado = Math.floor(Math.random() * 8); // 0 a 7

    let comidaEscolhida = "";

    if (numeroSorteado === 0) {
        comidaEscolhida = "Pizza";
    } else if (numeroSorteado === 1) {
        comidaEscolhida = "Hambúrguer";
    } else if (numeroSorteado === 2) {
        comidaEscolhida = "Sushi";
    } else if (numeroSorteado === 3) {
        comidaEscolhida = "Churrasco";
    } else if (numeroSorteado === 4) {
        comidaEscolhida = "Massas";
    } else if (numeroSorteado === 5) {
        comidaEscolhida = "Dogão";
    } else if (numeroSorteado === 6) {
        comidaEscolhida = "Bife com fritas";
    } else if (numeroSorteado === 7) {
        comidaEscolhida = "Estrogonofe";
    } else {
        comidaEscolhida = "Erro ao sortear";
    }

    console.log(`Número sorteado: ${numeroSorteado}`);
    console.log(`Hoje iremos comer: ${comidaEscolhida}!`);
}

// Executa a função
sortearComida();
// fala Bruno, tranquilo, testei seu código em if else. Obrigado

