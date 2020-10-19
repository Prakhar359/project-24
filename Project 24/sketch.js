
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect1 = new Rect(400,600,10,50);
    rect2 = new Rect(700,400,10,50);
	rect3 = new Rect(500,500,50,10);
	ball = new ball(10,600,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();

}



