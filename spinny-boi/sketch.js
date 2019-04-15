var circles = 9;
var tick = 0;
var center;
var circleWidth = 10;
var circleVel = 1.5;
var circleArr = [];

const rad2Deg = 57.2958;

function setup() {
  createCanvas(800,600);
  center = new Vector(width/2, height/2);
  for (let i = 1; i <= circles; i++) {
    const cDir = Circle.CLOCKWISE;
    const circle = new Circle(
      center.add(
        new Vector(0, circleWidth * 2 * i)
      ), 
      circleVel, 
      center, 
      circleWidth, 
      cDir
    );
    circleArr.push(circle);
    
  }
}

function draw () {
  background(255);
  fill(0);
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].draw();
    circleArr[i].update();
  }



  // for (var i = 0; i < circles; i++) {
  //   var cw = circleWidth * (i+2);
  //   var radius = cw * 2;
  //   var angularvel = circleVel / radius;
  //   var angle = angularvel * tick;
  
  //   fill(0);
  
  //   ellipse(center.x + radius * sin(angle), center.y + radius * cos(angle), circleWidth)
  //   ellipse(center.x - radius * sin(angle), center.y - radius * cos(angle), circleWidth)
  
  // }

  tick++;
}


