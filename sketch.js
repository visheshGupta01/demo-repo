var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  movingRect.x=Testing the changes.mouseX;
  movingRect.y=Testing the changes.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2   
 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
