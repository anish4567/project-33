const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ground, engine, world
var divisions=[]
var plinkos=[]
var particles=[]
var score=0
var count=0
var gameState="start"
var particle
function setup() {
  createCanvas(800,800);
engine=Engine.create()
world=engine.world
ground=new Ground(400,780,800,20)
for(var k=0;k<width;k=k+80){
divisions.push(new Division(k,650,10,300))
}
for(var j=75;j<width;j=j+50){
plinkos.push(new Plinko(j,75))

}
for(var j=50;j<width;j=j+50){
  plinkos.push(new Plinko(j,175))
  
  }
  for(var j=75;j<width;j=j+50){
    plinkos.push(new Plinko(j,275))
    
    }
}



function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  mousePressed();
  ground.display();
  textSize(30)
  fill("red")
  text("score:"+score,500,20)
  if(gameState==="end")
  text("game over",100,100)
  for(var i=0;i<plinkos.length;i++){
plinkos[i].display()


  }

    particle.display();
   
  
 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  if(frameCount%60===0){
    count++
    particle=new Particles(400,10)
  }
  
}
function mousePressed(){

  count++
  particle=new Particles(mouseX,10)



}