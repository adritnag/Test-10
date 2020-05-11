const World = Matter.World;
const Engine = Matter.Engine
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(400,790,800,10);
  box1 = new Box(350,760,50,50)
  box2 = new Box(400,760,50,50);
  box3 = new Box(450,760,50,50);
  box4 = new Box(500,760,50,50);
  box5 = new Box(550,760,50,50);
  box6 = new Box(600,760,50,50);
  box7 = new Box(650,760,50,50);
  box8 = new Box(375,710,50,50);
  box9 = new Box(425,710,50,50);
  box10 = new Box(475,710,50,50);
  box11 = new Box(525,710,50,50);
  box12 = new Box(575,710,50,50);
  box13 = new Box(625,710,50,50);
  box14 = new Box(400,660,50,50);
  box15 = new Box(450,660,50,50);
  box16 = new Box(500,660,50,50);
  box17 = new Box(550,660,50,50);
  box18 = new Box(600,660,50,50);
  box19 = new Box(425,610,50,50);
  box20 = new Box(475,610,50,50);
  box21 = new Box(525,610,50,50);
  box22 = new Box(575,610,50,50);
  box23 = new Box(450,560,50,50);
  box24 = new Box(500,560,50,50);
  box25 = new Box(550,560,50,50);
  box26 = new Box(475,510,50,50);
  box27 = new Box(525,510,50,50);
  box28 = new Box(500,460,50,50);
  ball = new Ball(100,500,100);
  chain = new Chain(ball.body,{x:100,y:500})
}
  
function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  ball.display();
  chain.display();
}


function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY} )
}

function mouseReleased(){
  chain.fly();
}