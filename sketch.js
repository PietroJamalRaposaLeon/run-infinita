
var jogador,jogadorImg;

var fundo,fundoImg;

var musica;

function preload(){

fundoImg = loadImage("fundo5.png");

musica = loadSound("som.mp3");

}

function setup() {
 createCanvas(700,300);

 fundo = createSprite(350,150,30,30);
 fundo.addImage("Img",fundoImg);
 fundo.scale = 5;
 
 
}

function draw() {
 background("black");



 drawSprite();
}