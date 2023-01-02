size(2500,1500);
background(232);
strokeWeight(10);
int i = 0;
beginShape(LINES);
while (i < 51) {
  stroke(random(255),random(255),random(255));
  vertex(random(2500),random(1500));
  i=i + 1;
}
endShape();
