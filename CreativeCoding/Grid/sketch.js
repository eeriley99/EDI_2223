function setup() {//runs one time
createCanvas (720,720);//canvas is 720 pixels x 720 pixels
background (255, 255, 0);//background is rgb yellow
}

function draw() {//runs in a loop
fill (255, 0, 0);//fills red
strokeWeight (8);//stroke weight 8 pixels
translate (60, 60);
quad (0, 0,
      300, 0,
      300, 300,
      0, 300);

quad (300, 0,
      600, 0,
      600, 300,
      300, 300);//move quad 300 pixels in the x direction

quad (0, 300,
      300, 300,
      300, 600,
      0, 600);

quad (300, 300,
      600, 300,
      600, 600,
      300, 600);//move quad 300 pixels in the y direction

}
