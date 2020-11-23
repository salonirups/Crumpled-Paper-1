
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land;
var bin1,bin2,bin3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	land=new Ground(width/2,690,width,20);
	ball=new Paper(200,685,50);
	bin1=new Container(752,655,10,55)
	bin2=new Container(800,685,110,10)
	bin3=new Container(850,655,10,55)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  land.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:120,y:-80});}
}



