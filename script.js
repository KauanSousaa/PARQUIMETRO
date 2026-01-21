class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = valorInserido;
        this.opcoes = [
            { valor: 1.00, tempo: 30 },
            { valor: 1.75, tempo: 60 },
            { valor: 3.00, tempo: 120 },
        ];
    }

    calcular() {
        if (this.valorInserido < 1.00) {
            return { mensagem: "Valor insuficiente", tempo: 0, troco:0};
        }

        let tempo = 0;
        let troco = this.valorInserido;

        for (let i = this.opcoes.length - 1; i >= 0; i--) {
            if (this.valorInserido >= this.opcoes[i].valor) {
                tempo = this.opcoes[i].tempo;
                troco = (this.valorInserido - this.opcoes[i].valor).toFixed(2);
                break;
            }
        }

        return { mensagem: "Tempo calculado com sucesso", tempo: tempo, troco: troco };
    }
}

function simular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcular();

    const resultadoDiv = document.getElementById("resultado");
    if (resultado.tempo === 0) {
        resultadoDiv.innerHTML = `<p class="erro">${resultado.mensagem}</p>`;
    } else {
        resultadoDiv.innerHTML = ` <p>${resultado.mensagem}</p> <p>Tempo de permanência: ${resultado.tempo} minutos</p> <p>Troco: R$ ${resultado.troco}</p> `;
    }
}