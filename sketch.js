//função para as configurações do JS
function setup() {
  createCanvas(640, 600);
  somDaTrilha.loop();
}

//função para desenhar no JS
function draw() {
background(backgroundimg);
ator();
mostrarinimigos();
movimentainimigos();
movimentaAtor();
pontoinicial();
coracao();
trofeu();
incluiCoracao();
incluiPontos();
marcaPonto();
verificaColisao();
gameover();
}








  