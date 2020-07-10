const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var papper;
var ground;
var dl,dc,dr;
function setup(){
createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    papper = new Papper(200,200);
    ground = new Ground(600,380,width,20);
    dl = new Dustbin(1100,330,10,100);
    dc = new Dustbin(1150,370,100,10);
    dr = new Dustbin(1180,330,10,100)
 



}

function draw(){
    background(0);
    Engine.update(engine);
    papper.display();
    ground.display();
    dl.display();
    dc.display();
    dr.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(papper.body,papper.body.position,{x:85,y:200-85});
        isStatic:false
    }
}