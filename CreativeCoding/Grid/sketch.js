function setup() {//runs once
createCanvas (720, 720);// creates a canvas 720 pixels by 720 pixels
background (255, 0, 255); //background color
}

function draw() {//runs in a loop
fill (255, 0, 0);//fills shape with RGB color
strokeWeight (8);//assigns stroke weight
translate (60, 60); //creates a new origin point (60, 60)
quad (0,0,
      300, 0,
      300, 300,
      0, 300);

quad (300,0,
      600, 0,
      600, 300,
      300, 300);// add 300 in the x direction

quad (0,300,
      300, 300,
      300, 600,
      0, 600);

quad (300,300,
      600, 300,
      600, 600,
      300, 600);// add 300 in the y direction  
}
