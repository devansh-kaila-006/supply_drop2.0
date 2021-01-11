var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dz1,dz2,dz3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
  dz1=createSprite(400,650,100,20);
  dz1.shapeColor="red";
  dz2=createSprite(340,610,20,100);
  dz2.shapeColor="red";
  dz3=createSprite(440,610,20,100);
  dz3.shapeColor="red";
  
  dz1=Bodies.rectangle(400,635,100,20,{isStatic:true});
  dz2=Bodies.rectangle(345,610,20,100,{isStatic:true});
  dz3=Bodies.rectangle(445,610,20,100,{isStatic:true});
  World.add(world,dz1);
  World.add(world,dz2);
  World.add(world,dz3);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody, false);
  }

}