size(1500,1500);
background(255);
stroke(232,186,90);
strokeWeight(3);
int i = 0;
while (i < 25) {
  line(750,750,random(1500),random(1500));
  i=i + 1;
  
while (i < 13) {
  line(0,750,random(1500),random(1500));
  line(750,0,random(1500),random(1500));
  line(1500,750,random(1500),random(1500));
  line(750,1500,random(1500),random(1500));
  line(0,0,random(1500),random(1500));
  line(0,1500,random(1500),random(1500));
  line(1500,1500,random(1500),random(1500));
  line(1500,0,random(1500),random(1500));
  i=i + 1;
}
}
