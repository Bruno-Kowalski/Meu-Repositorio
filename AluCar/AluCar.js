const prompt = require('prompt-sync')({ sigint: true });

function obterDadosDoUsuario() {
    const dias = Number(prompt("Quantos dias o carro foi alugado? "));
    const km = Number(prompt("Quantos Km o carro percorreu? "));
    return { dias, km };
}

function validarDados({ dias, km }) {
    return Number.isFinite(dias) && dias > 0 && Number.isFinite(km) && km >= 0;
}

function calcularPrecoTotal({ dias, km }, precoDia = 60, precoKm = 0.15) {
    return (dias * precoDia) + (km * precoKm);
}

function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2)}`;
}

// Programa principal
(function main() {
    const dados = obterDadosDoUsuario();

    if (!validarDados(dados)) {
        console.log("Erro: o número de dias deve ser maior que zero e os quilômetros percorridos não podem ser negativos.");
        return;
    }

    const total = calcularPrecoTotal(dados);
    console.log("O preço total a pagar é:", formatarPreco(total));
})();
