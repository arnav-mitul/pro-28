
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man1,man2,man3,man4,man5;
var tree,treeim,ground,grim;
var stone;
var boy,boyim,st1;

function preload()
{
  treeim=loadImage("tree.png");
  boyim=loadImage("boy.png");
  grim=loadImage("bg.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground= new Dus1 (350,700,900,35)
  
  tree=createSprite(630,500,10,10)
  tree.addImage(treeim)
  tree.scale=0.3
  
  boy=createSprite(200,635,10,10)
  boy.addImage(boyim);
  boy.scale=0.1

  stone = new pathhar(140,555,40,40)
  
  st1 = new SLINGSHOT (stone.body,{x:150,y:580});

  man1 = new mango(660,480,50,40);
  man2 = new mango(630,410,60,40);
  man3 = new mango(680,400,30,40);
  man4 = new mango(560,430,50,30);
  man5 = new mango(750,450,70,40);
  ground.display();

}


function draw() {
  //uio()
  rectMode(CENTER);
  background(grim);
  
  Engine.update(engine);
 // text
  fill(0)
  text("LETS EAT SOME MANGOES",100,100)
  text("PRESS SPACE FOR SECOND CHANCE",100,400)
  

  //st.display()
  drawSprites();
  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();
  stone.display();
  st1.display();

uio();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
  st1.fly();
}

function keyPressed(){
  if(keyCode === 32){
   st1.attached(stone.body)
 }
  }
  
 function uio(){
  if(collide(stone,man1)){
    Matter.Body.setStatic(man1,false);
  }

  if(collide(stone,man2)){
    Matter.Body.setStatic(man2,false);
  }

  if(collide(stone,man3)){
    Matter.Body.setStatic(man3,false);
  }
  
  if(collide(stone,man4)){
    Matter.Body.setStatic(man4,false);
  }

  if(collide(stone,man5)){
    Matter.Body.setStatic(man5,false);
  }
 }


