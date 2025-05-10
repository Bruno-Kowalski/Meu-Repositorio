const prompt = require('prompt-sync')({sigint: true});

prompt("Pressione ENTER para sortear a comida de hoje...");

let n1 = Math.floor(Math.random() * 8);
let comida;

switch (n1) {
    case 0:
        comida = "Pizza";
        break;
    case 1:
        comida = "Hambúrguer";
        break;
    case 2:
        comida = "Sushi";
        break;
    case 3:
        comida = "Churrasco";
        break;
    case 4:
        comida = "Massas";
        break;
    case 5:
        comida = "Dogão";
        break;
    case 6:
        comida = "Bife com fritas";
        break;
    case 7:
        comida = "Estrogonofe";
        break;
    default:
        console.log("Erro no sorteio.");
        break;
}

if (comida !== undefined) {
    console.log(`Número sorteado: ${n1}`);
    console.log(`Hoje iremos comer: ${comida}!`);
}