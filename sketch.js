
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3,bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roofObject, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//create roof object.
	roofObject = new Roof(width/2, height/4, width/7, 20);

	//create 5 bob objects
	bobDiameter = 40;
	bobStartPositionX = width/2;
	bobStartPositionY = height/4+500;

	bobObject1 = new Bob(bobStartPositionX-bobDiameter*2, bobStartPositionY, bobDiameter);
	bobObject2 = new Bob(bobStartPositionX-bobDiameter, bobStartPositionY, bobDiameter);
	bobObject3 = new Bob(bobStartPositionX, bobStartPositionY, bobDiameter);
	bobObject4 = new Bob(bobStartPositionX+bobDiameter, bobStartPositionY, bobDiameter);
	bobObject5 = new Bob(bobStartPositionX+bobDiameter*2, bobStartPositionY, bobDiameter);

	//create rope objects
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint){
	bobBodyPosition = constraint.bodyA.position
	roofBodyPosition = constraint.bodyB.position

	roofBodyOffset = constraint.pointB;
	
	roofBodyX = roofBodyPosition.x+roofBodyOffset.x
	roofBodyY = roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}


