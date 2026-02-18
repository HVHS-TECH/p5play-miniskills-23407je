/*******************************************************/
// P5.play: minigame
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let range = 0;

function setup() {
	console.log("setup: ");
cnv = new Canvas(1920, 1080);


world.gravity.y = 10;

wallLH  = new Sprite(20, height/2, 40, height, 'k');

wallRH  = new Sprite(1900, 540, 40, 1080, 'k');

wallTop = new Sprite(960, 20, 1920, 40, 'k');

wallBot = new Sprite(960, 1060, 1920, 40, 'k');

mousesprite = new Sprite(500, 500, 40, 40, 'd');

mousesprite.color = 255,200,200;

mousesprite.rotationSpeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200); 
	if (mouse.pressing()) {
range = range + 0.4;
var displayrange = round(range, 1);
}
if (mouse.released()) {
mousesprite.moveTo(mouseX, mouseY, range);
range = 0;
}
text("Power "+displayrange, 50, 50);
}

/*******************************************************/
//  END OF APP
/*******************************************************/