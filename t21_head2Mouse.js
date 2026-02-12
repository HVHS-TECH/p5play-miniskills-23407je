/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);

wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallRH  = new Sprite(1920, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 0, 1920, 40, 'k');

wallBot = new Sprite(960, 1080, 1920, 40, 'k');

mousesprite = new Sprite(500, 500, 40, 40, 'd');

mousesprite.color = 255,200,200;

mousesprite.rotationSpeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200); 

mousesprite.moveTowards(mouseX, mouseY, 0.1
);

if (mouse.presses()) {
mousesprite.moveTo(mouseX, mouseY, 1);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/