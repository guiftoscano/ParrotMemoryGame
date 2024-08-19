let arteCarta = ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let cartas = [];
let cartaVelha;
let classeCartasJogadas = [];
let paresCorretos = 0;
let numeroTotaldeCartas = 0;
let numeroDeJogadas = 0;

function flippar (carta) {
    numeroDeJogadas +=1;
    let cartaJogada = false;
    let cartaRepetida = false;

    if (cartaVelha !== undefined && cartaVelha.id == carta.id) {
        cartaRepetida = true;
    }

    for (let cont = 0; cont < classeCartasJogadas.length; cont++) {
        console.log 
        if (carta.classList[1] == classeCartasJogadas[cont]){
            cartaJogada = true;
        }
    }
  
    if (cartaVelha == undefined && cartaJogada==false) {
        carta.classList.toggle('flipped')
        console.log ("Prima vez")
    } else if (cartaVelha.id !== carta.id && cartaJogada == false) {
        carta.classList.toggle('flipped')
    }

    if (cartaVelha !== undefined && carta.classList[1] == cartaVelha.classList[1] && cartaJogada == false && cartaRepetida == false){
        paresCorretos +=1;
        classeCartasJogadas.push = carta.classList[1];
        if (paresCorretos == numeroTotaldeCartas/2){ 
            setTimeout(() => {
                alert(`Você ganhou em ${numeroDeJogadas} jogadas!`)
              }, 500); 
        } else {
        }
    } 
    
    if (cartaVelha !== undefined && carta.classList[1] !== cartaVelha.classList[1] && cartaJogada == false) {
        setTimeout(() => {
            carta.classList.toggle('flipped')
            cartaVelha.classList.toggle('flipped')
            cartaVelha = undefined
            cartaRepetida = false;
          }, 1000);
    } else if (cartaVelha !== undefined && carta.classList[1] == cartaVelha.classList[1] && carta.id !== cartaVelha.id) {
        cartaVelha = undefined;    
    } else {
        cartaVelha = carta;
    }
}

function comparador() { 
	return Math.random()-0.5; 
}

function adicionarCartas(totaldeCartas) {

let ul = document.querySelector("ul");
let contArte = 0;
let contagem = 0;
let idCont = 0;
let idName = "";

numeroTotaldeCartas = totaldeCartas;

for (let cont = 0; cont < totaldeCartas; cont++) {
    contArte += 1;
    idCont +=1;
    idName = ("id00"+idCont);
    const elementoCarta =`<li>
    <div id="${idName}" class="flip-container ${arteCarta[contagem]}" onclick="flippar(this)">
        <div class="flip-front"> 
        <img src= "imagens/back.png"></img>
        </div>
        <div class="flip-back">
        <img src= "imagens/${arteCarta[contagem]}.gif"> </img>
        </div>
    </div>
    </li>`;

        cartas[cont] = elementoCarta;

        if(contArte==2) {
            contArte=0;
            contagem +=1;
        }
    }

    cartas.sort(comparador); 

    for (let contUl = 0; contUl < cartas.length; contUl++) {
            ul.innerHTML += cartas[contUl]
    }
}

function numeroDeCartas(){
    let totalCartas = Number(prompt("Digite com quantas cartas você quer jogar! Não mais do que 14 e não menos do que 4!"));
    if(totalCartas >= 4 && totalCartas <= 14 && totalCartas %2 === 0) {
        adicionarCartas(totalCartas);
    } else {
        numeroDeCartas();
    }
}

 numeroDeCartas();