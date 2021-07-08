const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas, tower, ground, cannon;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}
  
function setup(){
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    angle = -PI/4;
    ground = new Ground(0,height-1, width*2,1)
    tower = new Tower(150,350,160,310);
    cannon = new Cannon(180,110,110,50,angle)
}

function draw(){
    background(189);
    image(backgroundImg, 0, 0, width, height);

    Engine.update(engine);
    ground.display();
    
    tower.display();
    cannon.display();
    
}