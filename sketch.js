
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, paperObject, ground1;

function preload()
{

}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
  
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  
  ground1 = new ground(width/2, 400, width, 10,{
    isStatic: true
  });
  

  dustbin1 = new dustbin(650,320,10,70);
  dustbin2 = new dustbin(750,320,10,70);
  paperObject = new paper(100,300,10);
  
  

  Engine.run(engine);
  World.add(world, ground1);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  display();

 

  
 
}
function keyPressed() {
  if(keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:1,y:-2});
  }
}


function display() {
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  paperObject.display();                                                                                        
}

