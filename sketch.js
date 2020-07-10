var thickness, wall;
var bullets, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52); 

  bullets = createSprite(50, 200, 40, 50);
  bullets.velocityX = speed;
  wall = createSprite(500, 200, thickness,200); 

  bullets.shapeColor = "white";
 
  wall.shapeColor = "brown";  

  thickness = random(22,83);
  
}

function draw() {
  background("white");  
  
  if(wall.x - bullets.x < (bullets.width + wall.width)/2)
  { 
    bullets.velocityX = 0;
    //var deformation = 0.5*weight*speed*speed/22500;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage === 3.68)
    {
      wall.shapeColor = "green";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      //text("Deformation is:"+deformation, 200,200);
      text("damage is:"+damage, 200,200);
    }  

    if(damage === 12.48)
    {
      wall.shapeColor = "red";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      //text("Deformation is:"+deformation, 200,200);
      text("damage is:"+damage, 200,200);
    } 
    
    /*if(damage <100 )
    {
      bullets.shapeColor = "blue";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      //text("Deformation is:"+deformation, 200,200);
      text("damage is:"+damage, 200,200);
    }*/
  }
drawSprites();
}