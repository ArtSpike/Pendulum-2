
const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;
var ball, chain;
function setup() {
  createCanvas(1200,800);
  engine= Engine.create();
  world = engine.world;
  ball= new Ball(400,200,50);
  ball1= new Ball(500,200,50);
  ball2= new Ball(600,200,50);
  ball3= new Ball(700,200,50);
  ball4= new Ball(800,200,50);

  chain = new Chain(ball.body, {x:400,y:100});
  chain1= new Chain(ball1.body, {x:500,y:100}); 
  chain2= new Chain(ball2.body, {x:600,y:100});
  chain3= new Chain(ball3.body, {x:700,y:100});
  chain4= new Chain(ball4.body, {x:800,y:100});
}

function draw() {
  background(0); 
  Engine.update(engine);

  ball.display();
  chain.display();
  ball1.display();
  chain1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  chain2.display();
  chain3.display();
  chain4.display();
  //if(keyIsDown(UP_ARROW)){
   // Matter.Body.setPosition(ball.body, {x: 300 , y: 100});
  //}
  
  drawSprites();
  
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}


