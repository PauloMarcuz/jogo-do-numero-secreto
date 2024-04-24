let listaDeNumerosSorteados = [];
let numeroInicial = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`, `Escolha um número entre 1 a ${numeroInicial}`);
}

function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById(`reiniciar`).setAttribute(`disabled`,true);
}

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela(`h1`,`Acertou!`);
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = `Você descrobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela(`p`, mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else if (chute > numeroSecreto){
            exibirTextoNaTela(`p`,`O número secreto é menor`);
    }   else{
            exibirTextoNaTela(`p`,`O número secreto é maior`);
        }
        tentativas++;
        limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroInicial + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
       
    
}
