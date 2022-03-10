var zombie;
var family,man;
var come;
var madmana;
var madman;
var det;
var music;
var game;

function preload() {
 zombian = loadImage("zombiesgroup.png");
 man = loadImage("familyimage.png");
 come = loadImage("hauntedhouse.png");
 madmana = loadImage("zombiesgroup2.png");
 detman = loadImage("zombiesgroup3.png");
 music = loadSound("bg.mp3");
 games = loadImage("gameover.png");
}



function setup() {
 createCanvas(1300,600)
 music.play();

 family = createSprite(600,300,20,50);
 family.addImage(man);
 family.scale = 1.2;

 zombies = new Group();
 madmans = new Group();
 dets = new Group();
}

 


function draw() {
background(come);


if (gameState === 1) {
  background(come);
  family.x = World.mouseX;
  family.y = World.mouseY;
 
  edges = createEdgeSprites();
  family.collide(edges);

  //code to reset the background
  if (background.x > 400) {
    background.x = height / 2;
    }

  createdetsImage();
  createmadmansImage();
  createzombiesImage();


  if (zombies.isTouching(family)) {
    for (var i = 0; i < zombies.length; i++) {
      if (zombies[i].isTouching(family)) {
        family[i].destroy();
        gameState = 2;
      }
    }
  }

  if (madmans.isTouching(family)) {
    for (var i = 0; i < madmans.length; i++) {
      if (madmans[i].isTouching(family)) {
        family[i].destroy();
        gameState = 2;}
    }
  }

  if (dets.isTouching(family)) {
    for (var i = 0; i < dets.length; i++) {
      if (dets[i].isTouching(family)) {
        family[i].destroy();
        gameState = 2;
      }
    }
  }

}


  if (gameState == 2) {

    game = createSprite(width/2, height/2);
    game.addImage(games);
    end.scale = 0.4;

    family.destroy()

    zombies.destroyEach();  
    zombies.setVelocityYEach(0);
 
    madmans.destroyEach();  
    madmans.setVelocityYEach(0);

    dets.destroyEach();  
    dets.setVelocityYEach(0);
  }


drawSprites();
}
function createzombiesImage() {
  if (World.frameCount % 100 == 0) {
    var zombies = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
    zombies.addImage(zombian);
    zombies.scale = 0.80;
    zombies.velocityY = 3;
    zombies.lifetime = windowHeight;
  }
}
function createdetsImage() {
  if (World.frameCount % 100 == 0) {
    var dets = createSprite(Math.round(50, 50, 10, random(10, width - 10)));
    dets.addImage(detman);
    dets.scale = 0.80;
    dets.velocityX = 3;
    dets.velocityY = 2;
    dets.lifetime = windowHeight;
  }

}
function createmadmansImage() {
  if (frameCount % 100 == 0) {  
    var madmans = createSprite(Math.round(900, 50, random(10, width - 10),10));
    madmans.addImage(madmana);
    madmans.scale = 0.80;
    madmans.velocityX = -3;
    madmans.velocityY = 2;
    madmans.lifetime = windowHeight;
  }
}

