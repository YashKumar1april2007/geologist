
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var ground;
var hammer1;
var log1;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Box(700,320,70,70);
	ground = new Ground(600,height,1200,20)
	hammer1 = new Hammer(400,500)
	log1 = new Log(710, 260, 300, PI/2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  box1.display();
  ground.display();
  hammer1.display();
  log1.display();

 
  
  drawSprites();
 
}



