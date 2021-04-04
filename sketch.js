const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;
var Paper;
var Dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Ground = new ground(600,1200,20,10);
	Paper = new paper(200,400,20,20);
	Dustbin = new dustbin(600,650);
	
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  //Engine.update();
  Ground.display();
  Paper.display();
  Dustbin.display();
 

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38) {
		Matter.body.applyForce(Paper.body, Paper.position, {x : 85, y:-85});
	}
}

