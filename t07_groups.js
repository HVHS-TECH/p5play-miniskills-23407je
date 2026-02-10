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
cnv = new Canvas(1920, 1080);
wallLH  = new Sprite(0, height/2, 8, height, 'k');
ball_1 = new Sprite(width/2, height/2, 50, 'd');
for (i = 0; i < 100; i++) {

  alien = new Sprite(...);

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

  alienGroup.add(alien);

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