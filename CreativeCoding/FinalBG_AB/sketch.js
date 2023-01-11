//create a program that enables us to customize the number of squares in a grid
let img;

function preload (){
  img = loadImage ('assets/ScreenShot.png');
}

function setup() {//run once
createCanvas(windowWidth,windowWidth);//creates a canvas 720x720 pixels
}

function draw() {//runs in a loop
// fill('fuchsia');//fills shape with rgb color
// strokeWeight(1);//assigns stroke weight

var num = 5; //number of sides in the array
var sideLen = windowWidth/num ;//side length variable

translate (-150, -150);

for (var y = 0; y < 2 * windowWidth; y = y+sideLen){
  for (var x = 0; x < 2 * windowWidth; x = x+sideLen){

image (img, x, y, windowWidth/num; windowWidth/num);
  }
}
}

function windowResized () {//allow windowrefresh with window resizing
  resizeCanvas (windowWidth, windowHeight);
}
