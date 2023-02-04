//variaveis
let backgroundimg;
let imgAtor;
let imgvilao;
let imgogro;

//função para carregar as imagens
function preload(){
  backgroundimg = loadImage("imagem/bkg.png")
  imgAtor = loadImage("imagem/gato.gif");
  imgogro = loadImage("imagem/ogro.gif");
  imgvilao = loadImage("imagem/ghost.png");
  imgcoracao = loadImage("imagem/coracao.png");
  imgtrofeu = loadImage("imagem/medalha.png");
  imggameover = loadImage("imagem/gameover.jpg");
  imageminimigos = [imgogro, imgvilao, imgogro, imgogro, imgogro, imgvilao, imgvilao, imgogro, imgvilao];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");

}
