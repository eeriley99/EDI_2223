//create a program that enables up to customize the number of squares in a grid
let gif;//"let img;" for image

function preload (){
  gif = loadImage ('assets/yellowSquare.gif');
}

function setup() {//runs once
createCanvas (windowWidth, windowWidth);// creates a canvas 720 pixels by 720 pixels
//background ('maroon'); //background color
}

function draw() {//runs in a loop
fill ('yellow');//fills shape with RGB color
strokeWeight (1);//assigns stroke weight

var num = 30; //number of sides in the array
var sideLen = windowWidth/num; //side length variable


for (var y = 0; y < windowWidth; y = y + sideLen){
  for (var x = 0; x < windowWidth; x = x + sideLen) {
image (gif, x, y, windowWidth/num, windowWidth/num);//img for image
  }
}




}
