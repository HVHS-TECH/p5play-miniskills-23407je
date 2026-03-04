/*******************************************************/
// P5.play: minigame
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let pause = 0;
let score = 0;
let obstacletime = 0;
let choice = 0;
function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);

let intervalID = setInterval(() => {
    if (pause < 1) {
           score = score + 1
    }
}, 25);
let intervalparts = setInterval(() => {
    if (pause < 1) {
        obstacletime = obstacletime + 1
    }
}, 1000);

world.gravity.y = 10;

wallLH  = new Sprite(20, height/2, 40, height, 'k');

wallRH  = new Sprite(1900, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 20, 1920, 40, 'k');

wallBot = new Sprite(960, 1060, 1920, 40, 'k');

playersprite = new Sprite(100, 1020, 40, 40, 'd');

playersprite.color = 255,200,200;

playersprite.rotationSpeed = 2;
//***** replay buttons visiblility*/
laserSprite = new Sprite(500, 840, 20, 400, 'l');
laserSprite2 = new Sprite(500, 265, 20, 450, 'l');
    laserSprite.color = 255,0,0;
    laserSprite.vel.x = -3
    laserSprite.rotationLock = true;
    laserSprite2.color = 255,0,0;
    laserSprite2.vel.x = -3
    laserSprite2.rotationLock = true;

     laserSprite3 = new Sprite(500, 840, 20, 400, 'l');
laserSprite4 = new Sprite(500, 340, 20, 300, 'l');
    laserSprite3.color = 255,0,0;
    laserSprite3.vel.x = -3
    laserSprite3.rotationLock = true;
    laserSprite4.color = 255,0,0;
    laserSprite4.vel.x = -3
    laserSprite4.rotationLock = true;
       playersprite.rotationLock = true;

replaySprite = new Sprite(width/2, height/2, 150, 150);
replaySprite.visible = false;
playersprite.rotationLock = true;
}
function laser() {
    laserSprite = new Sprite(500, 840, 20, 400, 'l');
laserSprite2 = new Sprite(500, 265, 20, 450, 'l');
    laserSprite.color = 255,0,0;
    laserSprite.vel.x = -3
    laserSprite.rotationLock = true;
    laserSprite2.color = 255,0,0;
    laserSprite2.vel.x = -3
    laserSprite2.rotationLock = true;
       playersprite.rotationLock = true;
}
function laser2() {
    laserSprite3 = new Sprite(500, 840, 20, 400, 'l');
laserSprite4 = new Sprite(500, 340, 20, 300, 'l');
    laserSprite3.color = 255,0,0;
    laserSprite3.vel.x = -3
    laserSprite3.rotationLock = true;
    laserSprite4.color = 255,0,0;
    laserSprite4.vel.x = -3
    laserSprite4.rotationLock = true;
       playersprite.rotationLock = true;
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
       if (obstacletime == 5) {
       choice = Math.random();
    choice = choice * 10
      if (choice >= 5 && choice <= 10) {
          laser();
      }
      if (choice <= 5 && choice >= 0) {
          laser2();
      }
        obstacletime = 0;
        console.log(obstacletime);
    }
	background(255, 200, 200); 
    replaySprite.x = width/2
    replaySprite.y = height/2
         if (replaySprite.mouse.pressed() && replaySprite.visible == true) {
                 replaySprite.visible = false;
                 laserSprite.x = 840;
                     laserSprite.vel.x = -3
                            world.gravity.y = 10;
                              laserSprite2.x = 840;
                     laserSprite2.vel.x = -3
        pause = 0;
        console.log("active");
        score = 0
 }
    if (pause < 1) {
        if (kb.pressing ('up')) {
    if (playersprite.vel.y > -15) {
        playersprite.vel.y = playersprite.vel.y + -0.5;
    }
};
if (kb.released ('up')) {   
    if (playersprite.vel.y > 0) {
      playersprite.vel.y = playersprite.vel.y + 2;  
    }
};
    }
           if (playersprite.collides(laserSprite)) {
        replaySprite.visible = true;
pause = 1;
laserSprite.vel.x = 0;
laserSprite.vel.y = 0;
laserSprite2.vel.x = 0;
laserSprite2.vel.y = 0;
obstacletime = 0;
    }
    if (playersprite.collides(laserSprite2)) {
        replaySprite.visible = true;
pause = 1;
laserSprite.vel.x = 0;
laserSprite.vel.y = 0;
laserSprite2.vel.x = 0;
laserSprite2.vel.y = 0;
obstacletime = 0;
    }
    if (playersprite.collides(laserSprite3)) {
        replaySprite.visible = true;
pause = 1;
 laserSprite3.vel.x = 0;
laserSprite3.vel.y = 0;
 laserSprite4.vel.x = 0;
laserSprite4.vel.y = 0;
obstacletime = 0;
    }
        if (playersprite.collides(laserSprite4)) {
        replaySprite.visible = true;
pause = 1;
 laserSprite3.vel.x = 0;
laserSprite3.vel.y = 0;
 laserSprite4.vel.x = 0;
laserSprite4.vel.y = 0;
obstacletime = 0;
    }
     if (pause >= 1) {
       playersprite.vel.x = 0;
        playersprite.vel.y = 0;
        world.gravity.y = 0;
 }
 text("Score: "+score, 50, 50);
}
/*******************************************************/
//  END OF APP
/*******************************************************/