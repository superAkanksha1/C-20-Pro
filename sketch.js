var Bground, Bground_image;
var cat, cat_image ,cat_running,cat_last;
var mouse, mouse_image ,mouse_running,mouse_last;

function preload() {
    //load the images here
    Bground_image = loadImage("garden.png");
    cat_image = loadImage("tomOne.png");
    cat_running= loadAnimation("tomTwo.png","tomThree.png");
    cat_last = loadAnimation("tomFour.png")
    mouse_image = loadImage("jerryOne.png");
    mouse_running= loadAnimation("jerryTwo.png","jerryThree.png");
    mouse_last = loadAnimation("jerryFour.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Bground = createSprite(500,400,1000,800);
    Bground.addImage(Bground_image);

    cat = createSprite(800,600,50,100);
    cat.addImage(cat_image);
    mouse = createSprite(200,600,50,100);
    mouse.addImage(mouse_image);

}

function draw() {

    background(220);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat_end",cat_last);
        cat.changeAnimation("cat_end");
        mouse.addAnimation("mouse_end",mouse_last);
        mouse.changeAnimation("mouse_end");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("cat_run",cat_running);
      cat.changeAnimation("cat_run");
      mouse.addAnimation("mouse_run",mouse_running);
      mouse.changeAnimation("mouse_run");
  }
}
