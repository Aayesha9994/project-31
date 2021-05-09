const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops=[]
function preload(){
    
}

function setup(){
    createCanvas(400, 700);


	engine = Engine.create();
	world = engine.world;
    if(frameCount%100===0){
        for(var i = 0;i<100;i++){
            drops.push(new Drops(random(0,400),random(0,400)))
        }
    }


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var i = 0;i<100;i++){
      drops[i].display()
      drops[i].updateY()
  }
  
  drawSprites();
 
}
  



