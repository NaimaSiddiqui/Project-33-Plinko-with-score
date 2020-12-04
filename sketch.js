var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle,turn=0;
var gameState="play";
var divisionHeight=300;
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new  Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 text("Count left:  "+ (5-count) ,600,30)
 text("500",20,500);
 text("500",100,500);
 text("500",180,500);
 text("500",260,500);

 text("100",340,500);
 text("100",420,500);
 text("100",500,500);

 text("200",580,500);
 text("200",660,500);
 text("200",740,500);
push();
 stroke("yellow");
 strokeWeight(3)
 line(0,450,800,450)
  Engine.update(engine);
  pop();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y > 760){



                      if(particle.body.position.x<300){
                       // console.log("read")
                         score=score+500;
                          particle= null;
                          if(count>=5)
                          gameState="end";
                         }

                          else if(particle.body.position.x > 300 && particle.body.position.x < 600) 
                              { 
                                console.log("read")
                                score=score+100; 
                                particle= null;
                                if(count>=5)
                                gameState="end";
                              }


                      else if(particle.body.position.x>600){
                        score=score+200;
                        particle=null;
                        if(count>=5)
                            gameState="end";
                           } 
     }
   }
     

   if(gameState==="end"){
     background("turquoise");
     textSize(40)
     text("Game Over !",200,250);
   }
}

function mousePressed(){
  if(gameState!="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}