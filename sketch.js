function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "red";
  moving = createSprite(100,200,100,50);
  moving.shapeColor = "green";
  rect1 = createSprite(600,150,50,50);
  rect2 = createSprite(600,350,50,50);
  rect1.velocityY = 2;
  rect2.velocityY = -2;
}

function draw() {
  background("black"); 
  moving.x = mouseX;
  moving.y = mouseY; 
 if( collision(moving, fixed)===true){
   moving.shapeColor = "pink";
   fixed.shapeColor = "blue";
 }
 else{
  moving.shapeColor = "yellow";
  fixed.shapeColor = "orange";
 }
  bounceOff(rect1,rect2);

  drawSprites();
}

