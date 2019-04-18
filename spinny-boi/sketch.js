const circles = 9;
var tick = 0;
var center;
const circleWidth = 10;
const circleVel = 1.5;
const circleArr = [];
const drawArr = [];

const rad2Deg = 57.2958;

function setup() {
  createCanvas(800,600);
  center = new Vector(width/2, height/2);
  for (let j = 0; j < 2; j++) {
    const cDir = j % 2 === 2 ? Circle.CLOCKWISE : Circle.COUNTERCLOCKWISE;
    const posMultiplier = j % 2 === 0 ? 1 : -1;
    
    for (let i = 1; i <= circles; i++) {
      const circle = new Circle(
        center.add(
          new Vector(0, circleWidth * 2 * i * posMultiplier)
        ), 
        circleVel, 
        center, 
        circleWidth, 
        cDir
      );
      circleArr.push(circle);
      
    }
    
  }

  const c1 = circleArr[1];
  const c2 = circleArr[8];
  const connection = new Connection([c2], c1, 0.75);
  drawArr.push(connection);

}

function draw () {
  background(255);
  fill(0);
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].draw();
    circleArr[i].update();
  }

  drawArr.forEach(o => {
    o.draw();
  });

  // circleArr[0].moveOrigin(0,1);



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


