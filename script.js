while(true){
    let numCartas = prompt("Com quantas cartas deseja jogar? (insira um número par, de 4 a 14)");
    if((numCartas % 2 === 0) && (numCartas >= 4) && (numCartas <= 14)){
        break;
    }
}
