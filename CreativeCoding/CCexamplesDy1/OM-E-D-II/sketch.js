
function preload (){
  window1 = loadImage ('Images/DayWindow3.png');
  window2 = loadImage ('Images/DayWindow2.png');
  window3 = loadImage ('Images/DayWindow4.png');
  window4 = loadImage ('Images/DayWindow1.png');

}

function setup() {
  createCanvas (2 * windowWidth, 2 * windowHeight);
  frameRate (0.5);
noStroke ();
}

function draw() {

var num = 4;

var XsideLen = windowWidth / num;


    for (var dy = 0; dy < 2 * windowHeight; dy = dy + XsideLen * 0.53) {

        for (var dx = 0; dx < 2 * windowWidth; dx = dx + XsideLen) {

   quad(dx, dy,
                dx + XsideLen, dy,
                dx + XsideLen, dy + XsideLen * 0.53,
                dx, dy + XsideLen * 0.53);

    var pics = [window1, window2, window3, window4];

    image(pics [int(random (0,4))], dx, dy, XsideLen, XsideLen * 0.53);
  }

  }
noLoop();
}
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
