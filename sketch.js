var bullet,wall,speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80)
  bullet.shapeColor="white";
}

function draw() {
  background(0,0,0);
  if(wall.shapeColor===(80,80,80)){
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}
  hasCollided(bullet, wall) {
    
    bulletRightEdge=bullet.x +bullet.width; wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true 
    } 
    return false;
  }
  wall.width=thickness;
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/thickness*thickness*thickness
   
   if(damage>10){
  wall.shapeColor=("red")
  }
    
   if(damage<10 ){
    wall.shapeColor=("green")
    }

  }
  drawSprites();
}
