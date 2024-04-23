function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}
var eyeball1 = 0
var eyeball2 = 0

console.log("Magician frog")

function draw() {
  background("#C9EDFF");

  
  // cape
  fill(color("#691F81"))
  stroke(color("#691F81"))
  beginShape()
  vertex(90,247)
  vertex(40,330)
  vertex(100,330)
  endShape()
   beginShape()
  vertex(310,247)
  vertex(360,330)
  vertex(300,330)
  endShape()
  
  // hat
  fill(color("black"))
  stroke(color("black"))
  
  rect(139,50,125,110)
  
  
  // frog
    fill(color("#AFD17B"))
  
  stroke(color("#AFD17B"))
  ellipse(300,174,65,65)
    ellipse(100,174,55,55)
  ellipse(300,174,55,55)
    
  push()
  translate(106,300)
  rotate(350)
  ellipse(0,0,50,100)
  pop()
  
  push()
  translate(294,300)
  rotate(10)
  ellipse(0,0,50,100)
  pop()
  
  ellipse(200,333,245,50)
    fill(color("#AFD17B"))
  stroke(color("#AFD17B"))
  ellipse(200,250,222,200)

  
  // belly + eye + nose
  fill(color("#F9F9E6"))
   stroke(color("#F9F9E6"))
  bezier(130,353,130,230,270,230,270,353)
  ellipse(200,353,136,10)
  ellipse(100,174,35,36)
  ellipse(300,174,36,35)
  fill(color("black"))
  stroke(color("black"))
  ellipse(98,172,20,20)
  ellipse(302,176,20,20)
  ellipse(170,174,8,8)
  ellipse(230,174,8,8)
  
  //tongue
  fill(color("#DD5C4F"))
  stroke(color("#DD5C4F"))
  bezier(190,193,163,240,242,244,210,193)
  fill(color("#81281F"))
  stroke(color("#81281F"))
  line(199,193,200,210)
  
  // smile
  fill(color("black"))
  stroke(color("black"))
  strokeWeight(3)
  curve(150,170,150,190,250,190,250,180)
  //triangle(180,210,220,210,200,235
  
  // hat
  rect(126,150,152,10)
  fill(color("red"))
  stroke(color("red"))
 rect(139,137,125,10)
  fill(color("#691F81"))
  stroke(color("#691F81"))
 
  
  // cape
  push()
  translate(145,265)
  rotate(15)
  ellipse(0,0,120,10)
  pop()
   push()
  translate(255,265)
  rotate(165)
  ellipse(0,0,120,10)
  pop()
  
   fill(color("black"))
  stroke(color("black"))
  ellipse(98,172,eyeball1,eyeball1)
  ellipse(302,176,eyeball2,eyeball2)

  
}