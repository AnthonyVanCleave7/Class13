var apple;
var garden,rabbit;
var gardenImg,rabbitImg,appleImg;
var frameCount;


//var apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}
//var rand = Math.round(random(1,100))
//console.log(rand)


//function createApples(){ 
//if(frameCount%80 === 0){
  
  //apple = createSprite(random(50,350),40,10,10);
  //apple.addImage(appleImg);
  //apple.scale = 0.4;
  //apple.velocityY = -1;
  //apple.y = Math.round(random(10,60));
//}
//}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.08;
apple.velocityY = +5;
apple.y = Math.round(random(10,60));


var rand = Math.round(random(1,100))
console.log(rand)
}


function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x = World.mouseX

  drawSprites();
}
//function createApples(){
  //if(frameCount%60 === 0){
   //if(apple === 1){
    //apple = createSprite(random(50,350),40,10,10);
    //apple.addImage(appleImg);
    //apple.scale = 1;
    //apple.velocityY = -1;
  //  apple.y = Math.round(random(10,60))
    //apple.scale = 1;
   //}
  //}
//}