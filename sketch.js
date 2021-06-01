const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4,pig2,log2,pig3,log3,log4,BIRD;
var bg

function preload(){
    bg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,350,60,60);
    box2 = new Box(800,350,60,60);
    pig1 = new Pig(700,350);
    ground = new Ground(600,390,1200,20)
    log1 = new Log(700,310,300,PI/2);
    box3 = new Box(600,270,60,60)
    box4 = new Box(800,270,60,60);
    pig2 = new Pig(700,270);
    log2 = new Log(700,230,300,PI/2);
    pig3 = new Pig(700,190);
    log3 = new Log(650,180,150,PI/6);
    log4 = new Log(750,180,150,-PI/6);
    BIRD = new Bird(100,100);

    // angles - degrees/radians
    // 180 deg = PI radians 
    // 30 deg = PI/6
}

function draw(){
    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    pig3.display();
    log3.display();
    log4.display();
    BIRD.display();
}