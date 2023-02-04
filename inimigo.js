//variaveis para os inimigos
let yinimigos = [250, 140, 197, 135, 330, 210, 3, 43 , 197];
let xinimigos = [700, 950, 790, 610, 830, 700, 900, 800, 1100];
let comprimentoinimigos = [100, 60, 100, 100, 100, 60, 60, 100, 60];
let alturainimigos = [155, 85, 155, 155, 155, 85, 85, 155, 85];
let velocidades = [1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8];




//função para mostar os inimigos
function mostrarinimigos(){
  for(let i = 0; i < imageminimigos.length; i++){
    image(imageminimigos[i], xinimigos[i], yinimigos[i], comprimentoinimigos[i], alturainimigos[i]);
  }
}


//função para movimentar o carro
function movimentainimigos(){
  for(let i = 0; i < imageminimigos.length; i++){
    xinimigos[i] -= velocidades[i];
  }
}


//função para ir ao ponto incial
function pontoinicial(){
  for(let i = 0; i < imageminimigos.length; i++){
    if (finaltela(xinimigos[i])){
     xinimigos[i] = 600;
     }
  }
}

//função para final da tela
function finaltela(xinimigos){
  return xinimigos < -50;
}



