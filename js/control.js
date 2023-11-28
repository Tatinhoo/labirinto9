var tabuleiro = document.getElementById("tabuleiro");
var posicao = "2B";
var segundos = document.getElementById("segundos");
var segundosNUM = 0;
var andar = 1;

segundos.textContent = segundosNUM+ " Segundo(os)"

tabuleiro.src = `img/primeiro andar/${posicao}.png`;

function obterPosicao(){

    if(andar == 1){
        posicao = prompt("Qual posição você quer ir? (Primeiro Andar)")
        tabuleiro.src = `img/primeiro andar/${posicao}.png`;
        segundosNUM ++
        segundos.textContent = segundosNUM+ " Segundo(os)"
    }else{
        if(andar == 2){
            posicao = prompt("Qual posição você quer ir? (Segundo Andar)")
            tabuleiro.src = `img/segundo andar/${posicao}.png`;
            segundosNUM ++
            segundos.textContent = segundosNUM+ " Segundo(os)"
        }
    }
}

function trocarAndar(){

    andar = 2;
    alert("Andar trocado (+5 segundos)")
    tabuleiro.src = `img/segundo andar/${posicao}.png`;
    segundosNUM = segundosNUM+ 5
    segundos.textContent = segundosNUM+ " Segundo(os)"
}