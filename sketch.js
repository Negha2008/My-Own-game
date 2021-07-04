var girl,girl_jumping ;
var tower , towerImage ;
var climberImage;

function preload(){
girljumping = loadAnimation("1.png","2.png", "3.png","4.png");
girlImage = loadImage("1.png");
//towerImage = loadImage("tower.png");
climberImage = loadImage( "climber.png");
coinImage = loadImage ("coin4.png");
}

function setup(){
createCanvas (400, 400);
tower= createSprite(0,0);
//tower.addImage(towerImage);
tower.scale = 4 ;
girl = createSprite(width/2,height-50,50,50);
//girl.addAnimation("jumping",girl_jumping)
girl.addImage(girlImage);

}

function draw(){
background(0);
tower.velocityY = 1;
if(tower.y>400 ){
    tower.y = tower.height/2
    
}
if(keyDown ("space")){
    girl.velocityY=-12 ;
}
girl.velocityY=girl.velocityY + 0.8 ;
if(keyDown("LEFT_ARROW")){
    girl.x=girl.x-5
}
if(keyDown("RIGHT_ARROW")){
    girl.x=girl.x+5;
}
Spawnclimber();
SpawnObstacles1();
SpawnObstacles2();
SpawnObstacles3();
SpawnObstacles4();
drawSprites();
}
function Spawnclimber(){
    if (frameCount%200===0){
        var climber = createSprite (0,0,10,20)
        var invisilbeclimber = createSprite (0,-20,10,20)
        climber.x= Math.round(random(20,380))
        invisilbeclimber.velocityY=1 ;
        invisilbeclimber.x=climber.x
        invisilbeclimber.lifetime=200
        invisilbeclimber.visible = false
        climber.velocityY=1 ;
        climber.lifetime=200
        climber.addImage(climberImage);
        climber.depth= girl.depth;
        girl.depth = girl.depth+1;
        var coin = createSprite (0,-40,10,20)
        coin.addImage(coinImage);
        coin.velocityY=1;
        coin.x=climber.x+20;
        coin.lifetime=200
    
    }
}

function SpawnObstacles1(){
    var obstacles = createSprite (0,0,10,30) ;
    obstacles.x= Math.round(random(20,380));
    obstacles.velocityY=1;
    obstacles.lifetime = 200;
    obstacles.depth=girl.depth ;
    
}

function SpawnObstacles2(){
    var obstacles2 = createSprite (0,0,10,30) ;
    obstacles.x= Math.round(random(20,380));
    obstacles.velocityY=1;
    obstacles.lifetime = 200;
    obstacles.depth=girl.depth ;
    

}

function SpawnObstacles3(){
    var obstacles3 = createSprite (0,0,10,30) ;
    obstacles.x= Math.round(random(20,380));
    obstacles.velocityY=1;
    obstacles.lifetime = 200;
    obstacles.depth=girl.depth ;
    
}

function SpawnObstacles4(){
    var obstacles4 = createSprite (0,0,10,30) ;
    obstacles.x= Math.round(random(20,380));
    obstacles.velocityY=1;
    obstacles.lifetime = 200;
    obstacles.depth=girl.depth ;
    
}

