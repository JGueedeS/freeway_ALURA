//posição do ator
let yator = 500;
let xator = 245;
let comprimentoator = 220;
let alturaator = 130;
let meusPontos = 0;
let minhasvidas = 5;
let colisao = false;

//função para mostar o ator
function ator(){
  image(imgAtor, xator, yator, comprimentoator, alturaator);
}

//função para movimentar o ator
function movimentaAtor(podesemover){
  if (keyIsDown(UP_ARROW)){//kEYISDOWN = Tecla precionada, UP_ARROW = tecla pra cima
      yator -= 3;
}
  if (keyIsDown(DOWN_ARROW)){//DOWN_ARROW = tecla pra baixo
   yator += 3;
  }
  if (keyIsDown(LEFT_ARROW)){//DOWN_ARROW = tecla pra baixo
   xator -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){//DOWN_ARROW = tecla pra baixo
   xator += 3;
  }
}



function verificaColisao(){
  for (let i = 0; i < imageminimigos.length; i++){
    colisao = collideRectCircle(xinimigos[i], yinimigos[i], comprimentoinimigos[i], alturainimigos[i], xator, yator, 7)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      if (coracaoMaiorQueZero()){
        minhasvidas -= 1;
      }
       }
    }
}

function voltaAtorParaPosicaoInicial(){
  yator = 500;
}
function coracaoMaiorQueZero(){
  return minhasvidas >= 0;
}

function gameover(){
  if(minhasvidas == 0){
        window.location.reload();
     }
}


function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}

//coração
function coracao(){
  image(imgcoracao, 40, 531, 60, 90)
   
}
function incluiCoracao(){
  textAlign(CENTER);
  textSize(33);
  stroke(6);
  fill(color(0, 0, 0));
  text(minhasvidas, width / 5, 575);
}



//trofeu e pontuação
function trofeu(){
  image(imgtrofeu, 40, 480, 60, 50);
}
function marcaPonto(){
  if (yator < -45){
    meusPontos++;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
//texto para declarar os pontos
function incluiPontos(){
  textAlign(CENTER);
  textSize(33);
  stroke(6);
  fill(color(0, 0, 0));
  text(meusPontos, width / 5, 515);
}
