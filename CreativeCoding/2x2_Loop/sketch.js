function setup() {//runs once
createCanvas (720, 720);
background (255, 255, 0);
fill (255, 0, 0);
strokeWeight (8);
}

function draw() {//runs in a loop

translate (60, 60);

quad (0, 0,
      300, 0,
      300, 300,
      0, 300);

quad (300, 0,
      600, 0,
      600, 300,
      300, 300);

quad (0, 300,
      300, 300,
      300, 600,
      0, 600);

quad (300, 300,
      600, 300,
      600, 600,
      300, 600);
}
