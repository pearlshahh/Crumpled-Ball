
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ground1=new Ground(500,990,1000,20)
	ground2= new Ground(730,930,20,100)
	ground3= new Ground(880,930,20,100)

	//Create the Bodies Here.
	ball= Bodies.circle(70,500,20,ball_options)
	World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
 
  ground1.show();
  ground2.show();
  ground3.show();
   
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})

		

	}
}


