function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let numCartas = 0;
let deckCartas = ["bobrossparrot.gif",
                    "explodyparrot.gif", 
                    "fiestaparrot.gif", 
                    "metalparrot.gif", 
                    "revertitparrot.gif", 
                    "tripletsparrot.gif", 
                    "unicornparrot.gif"];
let contador = 0;
let quantJogadas = 0;
let quantCertas = 0;

deckCartas = shuffleArray(deckCartas);

while(true){
    numCartas = prompt("Com quantas cartas deseja jogar? (insira um número par, de 4 a 14)");
    if((numCartas % 2 === 0) && (numCartas >= 4) && (numCartas <= 14)){
        break;
    }
}

deckCartas = deckCartas.slice(0, numCartas/2);
deckCartas = deckCartas.concat(deckCartas);

deckCartas = shuffleArray(deckCartas);


while(contador < deckCartas.length){
    document.querySelector(`main div:nth-child(${contador+1})`).style.display = "flex";
    contador++;
}

contador = 0;

function incrementaSegundos(){
    contador++;
    document.querySelector('.timer').innerHTML = contador;
}

Timer = setInterval(incrementaSegundos, 1000);

function clicouCarta(qualCarta){
    const cartaSelecionada = document.querySelector(`main div:nth-child(${qualCarta})`);
    if(cartaSelecionada.classList.contains('correta')){
        return;
    }
    quantJogadas++;
    const selecionadaAntes = document.querySelector('.selecionada');
    cartaSelecionada.classList.add('selecionada');
    cartaSelecionada.style.transform = "rotateY(180deg)";
    cartaSelecionada.querySelector('img').src = `./img/${deckCartas[qualCarta-1]}`;
    if(selecionadaAntes !== null){
        selecionadaAntes.classList.remove('selecionada');
        cartaSelecionada.classList.remove('selecionada');
        if(selecionadaAntes.querySelector('img').src === cartaSelecionada.querySelector('img').src){
            selecionadaAntes.classList.add('correta');
            cartaSelecionada.classList.add('correta');
            quantCertas = quantCertas + 2;
            if(quantCertas==numCartas){
                clearInterval(Timer);
                setTimeout(`alert('Você ganhou em ${quantJogadas} jogadas! A duração do jogo foi de ${contador} segundos!')`, 1000);
                function funcReinicio(){
                    while(true){
                        const querContinuar = prompt(`Gostaria de reiniciar a partida? Digite apenas "sim" e "não"`);
                        if(querContinuar === "sim" || querContinuar === "não"){
                            if(querContinuar==="sim"){
                                location.reload();
                            }
                            break;
                        }
                    }
                }
                setTimeout(funcReinicio, 1000);
            }
        }else{
            function desviraTudo(){
                selecionadaAntes.style.transform = "rotateY(-180deg)";
                cartaSelecionada.style.transform = "rotateY(-180deg)";
                cartaSelecionada.querySelector('img').src = './img/back.png';
                selecionadaAntes.querySelector('img').src = './img/back.png';
            }
            setTimeout(desviraTudo, 1000);
        }
    }
}