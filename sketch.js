const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var Ball
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(240,100,50,50)
    Ball=new Box(200,200,50,80)
    ground= new Ground(200,380,400,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   Ball.display();
   ground.display();
}