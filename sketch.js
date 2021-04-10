//deiclaring the variables
var hr,mn,sc;
var hrAngle,minAngle,scAngle;

function setup() 
{
  //creating the canvas
  createCanvas(800,800);
}

function draw() 
{
  background(0,0,0); 
  angleMode(DEGREES) //changing the angle mode
  drawSprites();

  // rading the hour minute and second
  hr = hour();
  mn = minute();
  sc = second();

  // changing them to degres
  hrAngle = map(hr,0,24,0,360)+90
  minAngle = map(mn,0,60,0,360)+90
  scAngle = map(sc,0,60,0,360)+90

  console.log(minAngle);
  
  // making 400 400 the "0,0"
  translate(400,400);
  //making the arcs empty
  noFill();

  //creating the second hand
  push()
    rotate(scAngle) // givig it its angle
    stroke(255,0,0) // giving it its color
    strokeWeight(7) // giving it its thickness
    line(0,0,100,0)
  pop()

  //crating the arc
  stroke(255,0,0)
  strokeWeight(7)
  arc(0,0,270,270,-90,scAngle)

  //creating the hour hand
  push()
    rotate(hrAngle) // givig it its angle
    stroke(0,0,255) // giving it its color
    strokeWeight(7) // giving it its thickness
    line(0,0,70,0)
  pop()

  //crating the arc
  stroke(0,0,255)
  strokeWeight(7)
  arc(0,0,220,220,-90,hrAngle)

  //creating the minute hand
  push()
    rotate(minAngle) // givig it its angle
    stroke(0,255,0) // giving it its color
    strokeWeight(7) // giving it its thickness
    line(0,0,120,0)
  pop()

  //crating the arc
  stroke(0,255,0)
  strokeWeight(7)
  arc(0,0,320,320,-90,minAngle)
}