const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var snakeArray = [];
var snake, ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  snake = new Box(200, 200, 30, 30);
  ground = new Ground(200, 390, 400, 20);

}

function draw() {
  background(173, 216, 230); 
  Engine.update(engine);
  snake.display();
  ground.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.setDir(0, -1);
    console.log(snake.velocityX);
  }
}

function setDir(x,y){
  this.direction.x = x;
  this.direction.y = y;
}
