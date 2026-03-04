/*******************************************************/
// P5.play: minigame
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let range = 0;
let counter = 1;

function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);

world.gravity.y = 10;


wallLH  = new Sprite(20, height/2, 40, height, 'k');

block = new Sprite(width/2, 920, 40, 200);

block2 = new Sprite(1160, 920, 40, 200);

block3 = new Sprite(1060, 820, 240, 40);

block4 = new Sprite(width/2, 700, 40, 200);

block5 = new Sprite(1160, 700, 40, 200);

block6 = new Sprite(1060, 600, 240, 40);

block7 = new Sprite(width/2 + 400, 920, 40, 200);

block8 = new Sprite(1560, 920, 40, 200);

block9 = new Sprite(1460, 820, 240, 40);

block10 = new Sprite(width/2 + 400, 700, 40, 200);

block11 = new Sprite(1560, 700, 40, 200);

block12 = new Sprite(1460, 600, 240, 40);

block13 = new Sprite(width/2 + 200, 1100 - 900, 40, 200);

block14 = new Sprite(1160 + 200, 1100 - 900, 40, 200);

block15 = new Sprite(1060 + 200, 1100 - 1000, 240, 40);

block16 = new Sprite(width/2 + 200, 1100 - 680, 40, 200);

block17 = new Sprite(1160 + 200, 1100 - 680, 40, 200);

block18 = new Sprite(1060 + 200, 1100 - 780, 240, 40);

wallRH  = new Sprite(1900, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 20, 1920, 40, 'k');

wallBot = new Sprite(960, 1060, 1920, 40, 'k');

mousesprite = new Sprite(100, 1020, 40, 40, 'd');

mousesprite.color = 255,200,200;

mousesprite.rotationSpeed = 2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200); 
	if (range >= 17) {
	range = 17;
}
	if (mouse.pressing()) {
		if (range < 17) {
			range = range + 0.4;
		}
var displayrange = round(range, 1);
}
if (mouse.released()) {
mousesprite.moveTo(mouseX, mouseY, range);
range = 0;
}
if (mousesprite.collides(wallBot)) {
	counter = counter - 1;
}
if (counter <= 0) {
	mousesprite.x = 100;
	mousesprite.y = 1020;
	mousesprite.vel.x = 0;
	mousesprite.vel.y = 0;
	counter = 1;
}
text("Power "+displayrange, 50, 50);
}

/*******************************************************/
//  END OF APP
/*******************************************************/