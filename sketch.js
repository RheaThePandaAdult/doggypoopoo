var obstaclesGroup
var groundimg, ground, dog, gameState=0
var d1, d2, d3
function preload(){
    groundimg=loadImage("ground.png");
    d1=loadAnimation("dog1.png","dog2.png","dog3.png");
}

function setup(){
createCanvas(600,600)
dog=createSprite(50,580,20,50)
dog.addAnimation("d1",d1)
dog.scale=0.1
ground=createSprite(300,695,600,20)
ground.addImage("grnd",groundimg)
ground.scale=3.5
ground.x=ground.width/2
ground.velocityX=-3
obstaclesGroup=new Group ()
}

 function draw(){
     background("lightblue")
     drawSprites()
     if(gameState===0){
         text('hello world',100,100)}
     if(gameState===1){


     if(ground.x<0){
         ground.x=ground.width/2
     }
     if(keyDown("space")&&dog.y>=505){
         dog.velocityY=-30
         dog.velocityX=2
     }
     dog.velocityX=0
     console.log(dog.y)

     dog.velocityY=dog.velocityY+2
     dog.collide(ground)

     obstacles()
     if(obstaclesGroup.collide(dog))
     {
         obstaclesGroup.shapeColor=red
     }
    }
 }
 function obstacles(){
     if(frameCount%100===0){
         var hurdle=createSprite(600,510,40,40)
         hurdle.velocityX=-3 
        obstaclesGroup.add(hurdle)
     }
 }