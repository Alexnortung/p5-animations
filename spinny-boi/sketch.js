var circles = 7;
var tick = 0;
var center;
var circleWidth = 10;
var circleVel = 5;

function setup() {
  createCanvas(800,600);
  center = new Vector(width/2, height/2);
}

function draw () {
  background(255);



  for (var i = 0; i < circles; i++) {
    var cw = circleWidth * (i+2);
    var radius = cw * 2;
    var angularvel = circleVel / radius;
    var angle = angularvel * tick;

    fill(0);

    ellipse(center.x + radius * sin(angle), center.y + radius * cos(angle), circleWidth)
    ellipse(center.x - radius * sin(angle), center.y - radius * cos(angle), circleWidth)

  }

  tick++;
}


class Circle {
  constructor(position, velocity, rotationOrigin) {
    this.position = position;
    this.velocity = velocity;
    this.rotationOrigin = rotationOrigin;
  }
}
