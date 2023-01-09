function setup() {//runs once
createCanvas (720, 720);
background (255, 255, 0);
fill (255, 0, 0);
strokeWeight (8);
}

function draw() {//runs in a loop

translate (60, 60);

for (var y = 0; y < 600; y = y + 300){
for (var x = 0; x < 600; x = x + 300){
  quad (x, y,
        x + 300, y,
        x + 300, y + 300,
        x, y + 300);
}
}
}
