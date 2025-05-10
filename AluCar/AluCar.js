const prompt = require('prompt-sync')({ sigint: true });

let dias = parseInt(prompt("Quantos dias o carro foi alugado? "));
let kmPercorridos = parseFloat(prompt("Quantos Km o carro percorreu? "));

if (isNaN(dias) || isNaN(kmPercorridos) || dias <= 0 || kmPercorridos < 0) {
    console.log("Erro: o número de dias deve ser maior que zero e os quilômetros percorridos não podem ser negativos.");
} else {
    const precoPorDia = 60;
    const precoPorKm = 0.15;
    const precoTotal = (dias * precoPorDia) + (kmPercorridos * precoPorKm);
    console.log(`O preço total a pagar é: R$${precoTotal.toFixed(2)}`);
}