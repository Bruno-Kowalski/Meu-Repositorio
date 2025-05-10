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
// Bruno obrigado por compartilhar esse código, eu e minha namorada estávamos em um impasse para decidir o que jantar, e de forma descontraída resolvemos essa questão.
// Adorei a forma como você estruturou o código, como sugestão utilize a forma switch case para simplificar a execução.
