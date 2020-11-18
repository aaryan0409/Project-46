var player,treasure,treasure2;
var boyimg,bgimg,brickimg,treasureimg,level2img,gameoverimg,groupimg;
var block1,block2;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13;
var platform1,platform2;
var death=3;
var gameState="play";
var obstacleGroup;
var level2,level3;
var ground1,ground2,ground3;
var hurdle1,hurdle2,hurdle3,hurdle4,hurdle5,hurdle6,hurdle7,hurdle8,hurdle9;

function preload(){
  boyimg=loadImage("boy.png");
  bgimg=loadImage("bg.jpg");
  brickimg=loadImage("brick.jpg");
  treasureimg=loadImage("treasure.jpg");
  gameoverimg=loadImage("gameOver.jpg");
  level2img=loadImage("level2.png");
  groupimg=loadImage("snake.png");
  level3img=loadImage("level3.png");
}

function setup() {
  createCanvas(800,600);
  edges=createEdgeSprites();

  obstacleGroup=new Group();

  hurdle1=createSprite(650,500,200,20);
  hurdle1.visible=false;
  hurdle2=createSprite(450,450,200,20);
  hurdle2.visible=false;
  hurdle3=createSprite(250,400,200,20);
  hurdle3.visible=false;
  hurdle4=createSprite(100,350,200,20);
  hurdle4.visible=false;
  hurdle5=createSprite(300,300,200,20);
  hurdle5.visible=false;
  hurdle6=createSprite(500,250,200,20);
  hurdle6.visible=false;
  hurdle7=createSprite(700,200,200,20);
  hurdle7.visible=false;
  hurdle8=createSprite(500,150,200,20);
  hurdle8.visible=false;
  hurdle9=createSprite(300,100,200,20);
  hurdle9.visible=false;
  
  ground1=createSprite(50,590,100,20);
  ground1.shapeColor="blue";
  ground1.visible=false;

  ground2=createSprite(750,590,100,20);
  ground2.shapeColor="blue";
  ground2.visible=false;

  ground3=createSprite(400,590,600,20);
  ground3.shapeColor="red";
  ground3.visible=false;

  player=createSprite(20,80,20,20);
  player.addImage(boyimg);
  player.scale=0.35;  
  player.setCollider("rectangle",0,0,20,20);
  player.debug=true;

  treasure=createSprite(750,515,25,25);
  treasure.addImage(treasureimg);  

  treasure2=createSprite(100,90,25,25);
  treasure2.addImage(treasureimg);  
  treasure2.visible=false;

  block1=createSprite(250,200,550,50);
  block1.addImage(brickimg);

  block2=createSprite(550,400,550,50);
  block2.addImage(brickimg);

  obstacle1=createSprite(100,80,20,20);
  obstacle1.shapeColor="blue";
  obstacle1.velocityY=5;
  obstacle1.scale=0.25;
  obstacle1.addImage(groupimg);
  obstacleGroup.add(obstacle1);

  obstacle2=createSprite(170,80,20,20);
  obstacle2.shapeColor="blue";
  obstacle2.velocityY=-5;
  obstacle2.scale=0.25;
  obstacle2.addImage(groupimg);
  obstacleGroup.add(obstacle2);

  obstacle3=createSprite(240,80,20,20);
  obstacle3.shapeColor="blue";
  obstacle3.velocityY=5;
  obstacle3.scale=0.25;
  obstacle3.addImage(groupimg);
  obstacleGroup.add(obstacle3);

  obstacle4=createSprite(310,80,20,20);
  obstacle4.shapeColor="blue";
  obstacle4.velocityY=-5;
  obstacle4.scale=0.25;
  obstacle4.addImage(groupimg);
  obstacleGroup.add(obstacle4);

  obstacle5=createSprite(380,80,20,20);
  obstacle5.shapeColor="blue";
  obstacle5.velocityY=5;
  obstacle5.scale=0.25;
  obstacle5.addImage(groupimg);
  obstacleGroup.add(obstacle5);

  obstacle6=createSprite(450,80,20,20);
  obstacle6.shapeColor="blue";
  obstacle6.velocityY=-5;
  obstacle6.scale=0.25;
  obstacle6.addImage(groupimg);
  obstacleGroup.add(obstacle6);

  obstacle7=createSprite(300,280,100,20);
  obstacle7.shapeColor="orange";
  obstacle7.velocityY=-5;
  obstacle7.scale=0.25;
  obstacle7.addImage(groupimg);
  obstacleGroup.add(obstacle7);

  obstacle8=createSprite(450,280,100,20);
  obstacle8.shapeColor="orange";
  obstacle8.velocityY=-5;
  obstacle8.scale=0.25;
  obstacle8.addImage(groupimg);
  obstacleGroup.add(obstacle8);

  obstacle9=createSprite(270,500,20,20);
  obstacle9.shapeColor="blue";
  obstacle9.velocityY=5;
  obstacle9.scale=0.25;
  obstacle9.addImage(groupimg);
  obstacleGroup.add(obstacle9);

  obstacle10=createSprite(340,500,20,20);
  obstacle10.shapeColor="blue";
  obstacle10.velocityY=-5;
  obstacle10.scale=0.25;
  obstacle10.addImage(groupimg);
  obstacleGroup.add(obstacle10);

  obstacle11=createSprite(410,500,20,20);
  obstacle11.shapeColor="blue";
  obstacle11.velocityY=5;
  obstacle11.scale=0.25;
  obstacle11.addImage(groupimg);
  obstacleGroup.add(obstacle11);

  obstacle12=createSprite(480,500,20,20);
  obstacle12.shapeColor="blue";
  obstacle12.velocityY=-5;
  obstacle12.scale=0.25;
  obstacle12.addImage(groupimg);
  obstacleGroup.add(obstacle12);

  obstacle13=createSprite(550,500,20,20);
  obstacle13.shapeColor="blue";
  obstacle13.velocityY=5;
  obstacle13.scale=0.25;
  obstacle13.addImage(groupimg);
  obstacleGroup.add(obstacle13);

  platform1=createSprite(650,200,100,20);
  platform1.shapeColor="red";
  platform1.velocityX=-5;
  obstacleGroup.add(platform1);

  platform2=createSprite(150,400,100,20);
  platform2.shapeColor="red";
  platform2.velocityX=5;
  obstacleGroup.add(platform2);

  level3=createSprite(400,300,30,30);
  level3.visible=false;
  level3.addImage(level3img);

  level2=createSprite(400,300,30,30);
  level2.addImage(level2img);
  level2.visible=false;  

}

function draw() {
  background(bgimg);
  obstacleGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityYEach(0);
  textSize(25);  
  stroke("black");
  text("Deaths:"+death,700,50);
  obstacle1.bounceOff(block1);
  obstacle1.bounceOff(edges);
  obstacle2.bounceOff(block1);
  obstacle2.bounceOff(edges);
  obstacle3.bounceOff(block1);
  obstacle3.bounceOff(edges);
  obstacle4.bounceOff(block1);
  obstacle4.bounceOff(edges);
  obstacle5.bounceOff(block1);
  obstacle5.bounceOff(edges);
  obstacle6.bounceOff(block1);
  obstacle6.bounceOff(edges);
  obstacle7.bounceOff(block1);  
  obstacle7.bounceOff(block2);
  obstacle7.bounceOff(edges);
  obstacle8.bounceOff(block1);
  obstacle8.bounceOff(block2);
  obstacle8.bounceOff(edges);
  obstacle9.bounceOff(block2);
  obstacle9.bounceOff(edges);
  obstacle10.bounceOff(block2);
  obstacle10.bounceOff(edges);
  obstacle11.bounceOff(block2);
  obstacle11.bounceOff(edges);
  obstacle12.bounceOff(block2);
  obstacle12.bounceOff(edges);
  obstacle13.bounceOff(block2);
  obstacle13.bounceOff(edges);
  platform1.bounceOff(block1);
  platform1.bounceOff(edges);
  platform2.bounceOff(block2);
  platform2.bounceOff(edges);
  player.bounceOff(edges);
  if(gameState==="level2play"){
  player.collide(hurdle1);
  player.collide(hurdle2);
  player.collide(hurdle3);
  player.collide(hurdle4);
  player.collide(hurdle5);
  player.collide(hurdle6);
  player.collide(hurdle7);
  player.collide(hurdle8);
  player.collide(hurdle9);
  }
  console.log(gameState);
  if(keyDown("UP_ARROW")){
    
    player.y=player.y-5;
  }

  if(keyDown("DOWN_ARROW")){
    player.y=player.y+5;
  }

  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+5;
  }

  if(keyDown("LEFT_ARROW")){
    player.x=player.x-5;
  }  

  if(death===0){
    gameState="end";
  }

  if(gameState==="end"){
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityYEach(0);
    player.velocityX=0;
    player.velocityY=0;
    var gameOver=createSprite(400,300,50,50);
    gameOver.addImage(gameoverimg);

  }

  //if(player.isTouching(edges)||player.isTouching(block1)||player.isTouching(block2)||player.isTouching(platform1)||player.isTouching(platform2)||player.isTouching(obstacle1)||player.isTouching(obstacle2)||player.isTouching(obstacle3)||player.isTouching(obstacle4)||player.isTouching(obstacle5)||player.isTouching(obstacle6)||player.isTouching(obstacle7)||player.isTouching(obstacle8)||player.isTouching(obstacle9)||player.isTouching(obstacle10)||player.isTouching(obstacle11)||player.isTouching(obstacle12)||player.isTouching(obstacle13)){
    //player.position.x=20;
   // player.position.y=80;
   // death=death-1;
   // if(death<=0){
   //   death=0;
  //  }
 // }

  if(player.isTouching(treasure)){
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityYEach(0);
    player.velocityX=0;
    player.velocityY=0;
    level2.visible=true;
    
  }

  if(mousePressedOver(level3)){
    level3.destroy();
    gameState="level3play";
  }
  
  if(mousePressedOver(level2)){
    level2.destroy();
    gameState="level2";
  }

  if(gameState==="level2play"){
    if(keyDown(UP_ARROW)){
      
      player.y=player.y-10;
    }
  
    if(keyDown(DOWN_ARROW)){
      player.y=player.y+5;
    }
  
    if(keyDown(RIGHT_ARROW)){
      player.x=player.x+5;
    }
  
    if(keyDown(LEFT_ARROW)){
      player.x=player.x-5;
    }  
     
     obstacleGroup.destroyEach();
     block1.destroy();
     block2.destroy();
     treasure.destroy();
     treasure2.visible=true;
     ground1.visible=true;
     ground2.visible=true;
     ground3.visible=true;
     hurdle1.visible=true;
     hurdle2.visible=true;
     hurdle3.visible=true;
     hurdle4.visible=true;
     hurdle5.visible=true;
     hurdle6.visible=true;
     hurdle7.visible=true;
     hurdle8.visible=true;
     hurdle9.visible=true;
  }
  if(gameState==="level2"){
    death=3;
    player.x=650;
    player.y=440;
    gameState="level2play";
  }

  if(gameState==="level2play"){
    if(keyDown(LEFT_ARROW)){
      player.velocityY=-8;
      player.velocityX=-8;
      }
      player.velocityY=player.velocityY+0.5;
    if(keyDown(UP_ARROW)){
      player.y=player.y-5;
    }
    if(keyDown(RIGHT_ARROW)){
      player.velocityY=-8;
      player.velocityX=8;
      }
      player.velocityY=player.velocityY+0.5;
    if(keyDown(DOWN_ARROW)){
      player.y=player.y+5;
    }

    if(player.isTouching(ground3)){
      death=death-1;
      player.x=650;
      player.y=440;
    }
    
  }
  if(player.isTouching(treasure2)&&gameState==="level2play"){
    player.velocityX=0;
    player.velocityY=0;
    level3.visible=true;
    gameState="level3";
  }
 if(gameState==="level3"){    
    hurdle1.destroy();
    hurdle2.destroy();
    hurdle3.destroy();
    hurdle4.destroy();
    hurdle5.destroy();
    hurdle6.destroy();
    hurdle7.destroy();
    hurdle8.destroy();
    hurdle9.destroy();
    ground1.destroy();
    ground2.destroy();
    ground3.destroy();
    
  }
  if(gameState==="level3play"){
    
  }
  drawSprites();
}