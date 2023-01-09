let gif;

function preload() {
  gif = loadImage('assets/WebGraphic.gif');//dimensions 80x82 px

}

function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
 // frameRate (1);
  noStroke ();
}

function draw() {

var num = 10; //variable for the number of squares in the array

  var sideLen = windowWidth/num; //variable for the side length of each square

  for (var y = 0; y < 2*windowWidth; y = y + sideLen) {//loop to create rows in the y direction

     for (var x = 0; x < 2*windowWidth; x = x + sideLen) {// loop to create a row of squares in the x direction





image(gif, x, y, windowWidth/num, windowWidth/num);
  }

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
