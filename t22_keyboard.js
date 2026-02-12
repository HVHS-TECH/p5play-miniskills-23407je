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

mousesprite = new Sprite(500, 500, 40, 40, 'd');

mousesprite.color = 255,200,200;

mousesprite.rotationSpeed = 2;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(255, 200, 200); 

if (kb.pressing('left')) {
mousesprite.vel.x = -5;
}

else if (kb.pressing ('right')) {
mousesprite.vel.x = 5;
};

if (kb.released('left')) {
mousesprite.vel.x = 0;
}
else if (kb.released ('right')) {   
mousesprite.vel.x = 0;
};
if (kb.pressing('down')) {
mousesprite.vel.y = 5;
}

else if (kb.pressing ('up')) {
mousesprite.vel.y = -5;
};

if (kb.released('down')) {
mousesprite.vel.y = 0;
}
else if (kb.released ('up')) {   
mousesprite.vel.y = 0;
};
}

/*******************************************************/
//  END OF APP
/*******************************************************/