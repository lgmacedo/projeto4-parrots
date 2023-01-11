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
let deckCartas = ["bobrossparrot",
                    "explodyparrot", 
                    "fiestaparrot", 
                    "metalparrot", 
                    "revertitparrot", 
                    "tripletsparrot", 
                    "unicornparrot"];
let contador = 0;

deckCartas = shuffleArray(deckCartas);

alert(deckCartas);

while(true){
    numCartas = prompt("Com quantas cartas deseja jogar? (insira um número par, de 4 a 14)");
    if((numCartas % 2 === 0) && (numCartas >= 4) && (numCartas <= 14)){
        break;
    }
}

deckCartas = deckCartas.slice(0, numCartas/2);
alert(deckCartas);
deckCartas = deckCartas.concat(deckCartas);
alert(deckCartas);

deckCartas = shuffleArray(deckCartas);
alert(deckCartas);


while(contador < deckCartas.length){
    document.querySelector('main').innerHTML += `<div onclick='clicouCarta(this)'><img src='./img/back.png' alt='verso-papagaio'></div>`;
    contador++;
}

function clicouCarta(qualCarta){
    qualCarta.style.background = "blue";
}