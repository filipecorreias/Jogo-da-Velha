var jogador, vencedor = null
var winnerSelect = document.getElementById('winner-select')
var jogadorSelect = document.getElementById('jogador-select')


mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }
    mudarJogador(jogador)
    checkVencedor()

}



function mudarJogador(valor){
    jogador = valor;
    jogadorSelect.innerHTML = jogador;
} 

function checkVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checkSequencia(quadrado1, quadrado2, quadrado3)){
        mudarcorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencendor(quadrado1)
        return; 
    }
    if(checkSequencia(quadrado4, quadrado5, quadrado6)){
        mudarcorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencendor(quadrado4)
        return; 
    }
    if(checkSequencia(quadrado7, quadrado8, quadrado9)){
        mudarcorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencendor(quadrado7) 
        return;
    }
    if(checkSequencia(quadrado1, quadrado4, quadrado7)){
        mudarcorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencendor(quadrado1) 
        return;
    }
    if(checkSequencia(quadrado2, quadrado5, quadrado8)){
        mudarcorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencendor(quadrado2) 
        return;
    }
    if(checkSequencia(quadrado3, quadrado6, quadrado9)){
        mudarcorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencendor(quadrado3) 
        return;
    }
    if(checkSequencia(quadrado1, quadrado5, quadrado9)){
        mudarcorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencendor(quadrado1) 
        return;
    }
    if(checkSequencia(quadrado3, quadrado5, quadrado7)){
        mudarcorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencendor(quadrado3) 
        return;
    }

}
function mudarVencendor(quadrado){
    vencedor = quadrado.innerHTML
    winnerSelect.innerHTML = vencedor

}

function mudarcorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checkSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML ){
        eigual = true;
    }
    return eigual;

}

function reiniciar(){
    vencedor = null;
    winnerSelect.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';

    }
    mudarJogador('X');
}