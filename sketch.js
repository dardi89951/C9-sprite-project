
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  var sprite = createSprite(375,375)

  if(keyDown("up")){
  sprite.y = sprite.y-5
}

background(30);
drawSprites()
}




