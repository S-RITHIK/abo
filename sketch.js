const mw = Matter.World;
const me = Matter.Engine;
const mb = Matter.Bodies;
var b1, b2, b3, b4, b5;
var pig0, pig1; 
var log1, log2, log3, log4;
var engine, world;
var g;
var ab;

function setup() {
  createCanvas(1200, 600);
  engine = me.create();
  world = engine.world;
  g = new ground(600, 590, 1200, 20);
  b1 = new box(700, 320, 70, 70);
  b2 = new box(920, 320, 70, 70);
  pig0 = new pig(810, 320);
  log1 = new log(810, 260, 300, PI/2);
  b3 = new box(700, 250, 70, 70);
  b4 = new box(920, 250, 70, 70);
  pig1 = new pig(810, 220);
  log2 = new log(810, 180, 300, PI/2);
  box4 = new box(810, 160, 70, 70);
  log3 = new log(760, 120, 150, PI/7);
  log4 = new log(870, 120, 150, -PI/7)
  ab = new bird(100, 80);
}
  

function draw() {
  background("orange");
  me.update(engine);  
  g.display();
  b1.display();
  b2.display();
  pig0.display();
  log1.display(); 
  b3.display(); 
  b4.display();
  pig1.display();
  log2.display(); 
  box4.display();
  log3.display();
  log4.display();
  ab.display();
}



