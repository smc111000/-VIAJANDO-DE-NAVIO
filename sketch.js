var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadImage("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // mover o plano de fundo
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;
  sea.velocityX = -3;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship-1.png",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);


  
    
  drawSprites();
}
