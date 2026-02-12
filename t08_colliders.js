/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);2

wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallRH  = new Sprite(1920, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 0, 1920, 40, 'k');

wallBot = new Sprite(960, 1080, 1920, 40, 'k');

mousesprite = new Sprite(500, 500, 40, 40, 'd');

mousesprite.color = 255,200,200;

mousesprite.rotationSpeed = 2;

ball_1 = new Sprite(width/10, height/2, 20, 'd');
ball_1.vel.x = 10;
alienGroup = new Group();
if (ball_1.bounciness <= 1) {
	ball_1.bounciness = 1;
}
for (i = 0; i < 100; i++) {

  alien = new Sprite();

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

  alienGroup.add(alien);
}

alienGroup.collides(ball_1, func2Call);
function func2Call(_ssss, _ball_1) {
// Delete the alien which was hit
_ssss.remove();
}
alienGroup.collides(mousesprite, func3Call);
function func3Call(_ssss, _ball_1) {
// Delete the alien which was hit
_ssss.remove();
}
if (alienGroup.collides(ball_1)) {
	ball_1.bounciness + 0.05;
}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200);
  mousesprite.moveTowards(mouseX, mouseY, 0.05);
if (mouse.presses()) {
mousesprite.moveTo(mouseX, mouseY, 1);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/