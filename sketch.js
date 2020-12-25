const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var turn;
var score;
var gameState;
var PLAY,END;

var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  score = 0;
  turn = 0;

  PLAY=0;
  END=1;
  gameState=PLAY;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",25,520);
  text("400",105,520);
  text("300",185,520);
  text("200",265,520);
  text("100",345,520);
  text("100",425,520);
  text("200",505,520);
  text("300",585,520);
  text("400",665,520);
  text("500",745,520);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   text(mouseX,700,10)
   text(mouseY,700,30)
 
   particle.display();

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed()
  {
     if(gameState!==END)
     {
       turn+=1
       particle=new Particle(mouseX,10,10);
     }
  }