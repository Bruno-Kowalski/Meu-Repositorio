const prompt = require('prompt-sync')({ sigint: true });

function sortearComida() {
    const opcoesDeComida = [
        "Pizza",
        "Hambúrguer",
        "Sushi",
        "Churrasco",
        "Massas",
        "Dogão",
        "Bife com fritas",
        "Estrogonofe"
    ];

    prompt("Pressione ENTER para sortear a comida de hoje...");

    const numeroSorteado = Math.floor(Math.random() * opcoesDeComida.length);
    const comidaEscolhida = opcoesDeComida[numeroSorteado];

    console.log(`Número sorteado: ${numeroSorteado}`);
    console.log(`Hoje iremos comer: ${comidaEscolhida}!`);
}

// Executa a função
sortearComida();
