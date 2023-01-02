void base() {
  background(255);
  stroke(255,0,0);
  fill(255,0,0);
  rect(0,0,500,500);
  rect(1500,0,500,500);
  stroke(255,255,0);
  fill(255,255,0);
  rect(500,0,500,500);
  rect(2000,0,500,500);
  stroke(0,0,255);
  fill(0,0,255);
  rect(1000,0,500,500);
  rect(2500,0,500,500);
}

void boxOne() {
  stroke(0,0,255);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(255,0,0);
  line(0,150,500,150);
  line(0,350,500,350);
  stroke(0);
  ellipse(250,250,300,300);
  stroke(255,255,0);
  line(200,110,200,390);
  line(300,110,300,390);
}

void boxTwo() {
  stroke(255,0,0);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(255,255,0);
  line(500,150,1000,150);
  line(500,350,1000,350);
  stroke(0);
  rect(600,100,300,300);
  stroke(0,0,255);
  line(700,100,700,400);
  line(800,100,800,400);
}

void boxThree() {
  stroke(255,255,0);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(0,0,255);
  line(1000,150,1500,150);
  line(1000,350,1500,350);
  stroke(0);
  triangle(1250,100,1100,400,1400,400);
  stroke(255,0,0);
  line(1200,200,1200,400);
  line(1300,200,1300,400);
}

void boxFour() {
  stroke(255,255,0);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(255,0,0);
  line(1500,150,2000,150);
  line(1500,350,2000,350);
  stroke(0);
  rect(1600,100,300,300);
  stroke(0,0,255);
  line(1700,100,1700,400);
  line(1800,100,1800,400);
}

void boxFive() {
  stroke(0,0,255);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(255,255,0);
  line(2000,150,2500,150);
  line(2000,350,2500,350);
  stroke(0);
  quad(2200,100,2300,100,2400,400,2100,400);
  stroke(255,0,0);
  line(2300,100,2300,400);
  line(2200,100,2200,400);
}

void boxSix() {
  stroke(255,0,0);
  strokeWeight(5);
  strokeCap(SQUARE);
  fill(0,0,255);
  line(2500,150,3000,150);
  line(2500,350,3000,350);
  stroke(0);
  quad(2600,100,2950,100,2900,400,2550,400);
  stroke(255,255,0);
  line(2700,100,2700,400);
  line(2800,100,2800,400);
}
