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

ball_1 = new Sprite(width/10, height/2, 20, 'd');
ball_1.vel.x = 10;
ball_1.bounciness = 1;
alienGroup = new Group();

for (i = 0; i < 10; i++) {

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
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200);
}

/*******************************************************/
//  END OF APP
/*******************************************************/