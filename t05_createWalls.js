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

wallLH  = new Sprite(0, height/2, 10, height, 'k');

wallLH.color = '#0000';

wallRH  = new Sprite(0, 0, 40, 1920, 'k');

wallTop = new Sprite(0, 0, 1920, 40, 'k');

wallBot = new Sprite(1920, 0, 40, 1920, 'k');


//shapes
shape = new Sprite(400, 400, 40, 40);
shape.color = '#87CEEB';
shape.rotationSpeed = 2;
shape.vel.x = 2;

circle = new Sprite(width/2, height/2, 50, 'd');

circle.color = '#87CEEB';

circle.vel.x = 2;

circle.bounciness = 1;

circle.friction = 0;

circle.drag = 0;

platform = new Sprite(700, 1040, 1920, 40, 'k');


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