var engine;
var world;
var ground, division, newDivisions;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = []
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,790,480,20);
  division = new Divisions(240, 770, 480, 30);

  for (var k = 0; k <=innerWidth; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var i = 15; i <=width-10; i=i+50){
    plinkos.push(new Plinko(i,175));
  }
  
  
}
  

function draw() {
  background(0,0,0); 


  ground.display();
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }
  
  

  drawSprites();
}