const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	
	 boxw1 = new Box (390,650,200,20)
	 boxh1 = new Box (300,610,20,100)
	 boxh2 = new Box (480,610,20,100)


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  boxw1.display()
  boxh1.display()
  boxh2.display()

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



