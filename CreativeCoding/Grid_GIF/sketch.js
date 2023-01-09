//create a program that can customize the number of squares in a grid

let gif;//img for static image

function preload(){//preload my img/gif
  gif = loadImage (assets/yellowSquare.gif);
}

function setup() {//runs once
createCanvas (windowWidth, windowWidth);// creates a canvas 720 pixels by 720 pixels
background (255, 255, 0); //background color
}

function draw() {//runs in a loop
fill (255, 0, 0);//fills shape with RGB color
strokeWeight (1);//assigns stroke weight

var num = 30; // number of squares in my array
var sideLen = windowWidth/num; //side length


for (var y = 0; y < windowWidth; y = y + sideLen ){//loop creates a row in the y direction
for (var x = 0; x  < windowWidth; x = x + sideLen ){//loop creates a row in the x direction
        image (gif, x, y, windowWidth/num, windowWidth/num);
}
}
}
