var car , wall ;
var speed , weight;
var car2 , wall2;
var speed2 , weight2;
function setup() {
  createCanvas(1600,400);
  speed=random(45,85);
  weight=random(400,1500);

  speed2=random(55,90);
  weight2=random(400,1550);
    
car = createSprite(50, 300, 30, 30);
car.shapeColor="blue";
car.velocityX=speed;

car2 = createSprite(50, 100, 30, 30);
car2.shapeColor="orange";
car2.velocityX=speed2;

wall = createSprite(1500,300,20,height/4);
wall.shapeColor="black";

wall2 = createSprite(1500,100,20,height/4);
wall2.shapeColor="black";

}

function draw() {
  background("violet");  

if(wall.x-car.x < car.width+wall.width/2){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation > 180){
car.shapeColor="red";
wall.shapeColor="white";
}
if(deformation<180 && deformation>100){
car.shapeColor="yellow";
wall.shapeColor="white";
}
if(deformation<100){
car.shapeColor="green";
wall.shapeColor="white";
}

}



if(wall2.x-car2.x < car2.width+wall2.width/2){
car2.velocityX=0;
  var deformation=0.5 * weight2 * speed2 * speed2/22509;
if(deformation > 180){
car2.shapeColor="red";
wall2.shapeColor="white";
    }
if(deformation<180 && deformation>100){
car2.shapeColor="yellow";
wall2.shapeColor="white";
      }
if(deformation<100){
car2.shapeColor="green";
wall2.shapeColor="white";
}       
  
}




  drawSprites();
}