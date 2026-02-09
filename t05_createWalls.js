/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
createCanvas(1920, 1080,);
world.gravity.y = 10;

wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallLH.color = '#0000';

wallRH  = new Sprite(0, 200, 40, 40, 'k');

wallTop = new Sprite(0, 600, 40, 40, 'k');

wallBot = new Sprite(0, 1000, 40, 40, 'k');

//shapes
shape = new Sprite(400, 400, 40, 40);
shape.color = '#87CEEB';
shape.rotationSpeed = 2;
shape.vel.x = 2;

circle = new Sprite(400, 500, 40);
circle.color = '#87CEEB';

platform_1 = new Sprite(0, 1040, 1920, 40, 'k');
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