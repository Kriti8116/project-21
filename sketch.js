var car,wall;
var speed,weight,thickness,speed;


function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321); 
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,10,10);
  bullet.shapeColor=color="white";
  wall=createSprite(1200,200,thickness,height/2); 
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;

}
//function draw

function draw() {
  background("black");
  bullet.debug=true;
  wall.debug=true;
  if(hasCollided(bullet,wall)){ 
bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness); 
    if(damage>10)
    { wall.shapeColor=color(220,0,0); } 
    if(damage<10)
    { wall.shapeColor=color(0,330,0);
    }
  } 
  //hasCollided(lbullet,lwall);
  drawSprites();
} 
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width; 
  wallLeftEdge=lwall.x; 
  if(bulletRightEdge>=wallLeftEdge)
  { return true; 
   
  } 
 
  return false;
    
}