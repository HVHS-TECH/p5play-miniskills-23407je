/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
/*******************************************************/
// setup()
/*******************************************************/
	function preload() {
  imgBG   = loadImage('../assets/images/cobyBG.jpg');
  imgFace = loadImage('../assets/images/coby.jpg');
}
function setup() {
	console.log("setup:t:20");
cnv = new Canvas(1920, 1080);

ball_1 = new Sprite(width/2, height/2, 1000, 'd');

ball_1.bounciness = 1;

ball_1.friction   = 0;

ball_1.image = (imgFace);

imgFace.resize(50, 50);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/