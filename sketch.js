
var monkey , monkey_running
var banana ,bananaimage, obstacle, obstacleimage
var foodgroup, obstaclegroup
var score;
var survivaltime, ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  score=0;
  
  foodgroup = createGroup();
  obstaclegroup = createGroup();
}


function draw() {
  background("white");
  
  stroke("red");
  textSize(24);
  fill("yellow");
  text("score:"+score,280,50);
  
  survivaltime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME:"+survivaltime,10,50);
  
  if(keyWentDown("space")&& monkey.y>=180){
    monkey.velocityY=-12; 
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  spawnobstacle();
  
  drawSprites();
}

function food(){
  
  if(frameCount%80===0){
    var banana = createSprite(370,100);
    banana.velocityX=-8;
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaimage);
    banana.scale=0.1;
    banana.lifetime=45;
    foodgroup.add(banana);
    
  }
}

function spawnobstacle(){
  
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,315,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage(obstacleimage);
   obstacle.lifetime=67;
   obstacle.scale=0.2;
   obstaclegroup.add(obstacle); 
  
}
}


