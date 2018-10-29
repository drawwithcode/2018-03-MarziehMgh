function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(229, 128, 255);

  for(var x=0; x<windowWidth; x+=25){
    for (var y=0; y<windowHeight; y+=25){
      stroke(1);
      line(x,y,x*windowWidth/2,y*windowWidth/2);
    }
  }


for(var x=0; x<windowWidth; x+=10){
  for (var y=0; y<windowHeight; y+=10){
    for(var r=random()*20; r<250; r+=20)
    var x = random()*windowWidth ;
    var y = random()*windowHeight ;
    var r = random()*10;
noStroke();
if (random()<20 ){
  fill(204, 179, 255);
}
else{
  fill(255, 179, 230);
}
ellipse(x,y,r);


  }
}






}

function draw() {
  var x = random() * width;
    var y = random() * height;
    var r = random() * 20;

strokeWeight(1);
  if (random()<20){
    fill(236, 179, 255);
  }
  else{
    nofill();
  }
  ellipse(x, y,r);
}
