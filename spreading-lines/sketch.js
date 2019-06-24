const linesAmount = 6;
let zoomScale = 1;
let rotation = 0;
let lineSpread = 100;
let linesFromCenter = 7;
let center = new Vector();
let centerMax;
let ml;
let tick = 0;
let lineExtendTime = 75;


function setup () {
    createCanvas(800, 600);
    center = new Vector(width / 2, height / 2);
    centerMax = Math.sqrt(2) * Math.max(center.x, center.y)
    // ml = new MovingLine(center.x, 0, center.x, height);
    // frameRate(5);
}

function draw() {
    background(255);
    // rotation += 0.0015;
    // lineSpread += 0.1;
    translate(center.x, center.y);
    // rotate(radians(65));
    scale(zoomScale);
    rotate(rotation);
    translate(-center.x, -center.y);

    //center lines
    // vertical
    // horizontal
    //diagonal 1 + 2

    let yAdd = 0;
    let xAdd = 0;

    if (width > height) {
        yAdd = (width - height) / 2;
    } else {
        xAdd = (height - width) / 2;
    }

    // line(center.x, 0, center.x, height);
    // line(0, center.y, width, center.y);
    // line(-xAdd, -yAdd, width + xAdd, height + yAdd);
    // line(-xAdd, height + yAdd, width + xAdd, -yAdd);


    // vertical lines
    for (let i = 0; i < linesFromCenter; i++) {
        const x1 = center.x + (i * lineSpread);
        const x2 = center.x - (i * lineSpread);
        line(x1, -centerMax, x1, height + centerMax);
        if (i !== 0) {
            line(x2, -centerMax, x2, height + centerMax);
            
        }
    }

    // horizontal lines
    for (let i = 0; i < linesFromCenter; i++) {
        const y1 = center.y + (i * lineSpread);
        const y2 = center.y - (i * lineSpread);
        line(-centerMax, y1, width + centerMax, y1);
        if (i !== 0) {
            line(-centerMax, y2, width + centerMax, y2);
            
        }
    }

    //diagonal lines
    for (let i = 0; i < linesFromCenter * 2; i++) {
        const extra = (i * lineSpread);
        //right of center
        line(
            -xAdd + extra - centerMax, 
            -yAdd - centerMax, 
            width + xAdd + extra + centerMax, 
            height + yAdd + centerMax
        );
        line(
            -xAdd - centerMax, 
            height + yAdd + extra + centerMax, 
            width + xAdd + centerMax, 
            -yAdd + extra - centerMax
        );
        
        
                
        if (i !== 0) {
            line(
                -xAdd - extra - centerMax,
                -yAdd - centerMax,
                width + xAdd - extra + centerMax,
                height + yAdd + centerMax
            );
                    
            //left of center
            line(
                -xAdd - centerMax, 
                height + yAdd - extra + centerMax, 
                width + xAdd + centerMax, 
                -yAdd - extra - centerMax
            );
        }
    }

    const tickOrder = [60, 160, 260, 360];

    tickOrder.forEach((cTick, o) => {
        if (tick >= cTick) {
            let progress = (tick - cTick) / lineExtendTime;
            progress = Math.min(progress, 1);

            //the 4 points
            const loops = 4 + (o * 8);
            for (let i = 0; i < loops; i++) {
                let n = i % (1 + o * 2);
                let xAdd, yAdd;
                xAdd = -0.5 * lineSpread;
                yAdd = -0.5 * lineSpread;
                // xAdd = i % 2 === 0 ? 0.5 * lineSpread : -0.5 * lineSpread;
                // yAdd = Math.floor(i / 2) === 0 ? 0.5 * lineSpread : -0.5 * lineSpread;
                xAdd *= ((o + 1) * 2) - 1;
                yAdd *= ((o + 1) * 2) - 1;

                if (i < loops * 1 / 4) {
                    xAdd += lineSpread * n;
                    
                } else if (i < loops * 2 / 4) {
                    xAdd *= -1;
                    yAdd += lineSpread * n;
                    
                } else if (i < loops * 3 / 4) {
                    xAdd *= -1;
                    yAdd *= -1;
                    xAdd -= lineSpread * n;
                } else {
                    yAdd *= -1;
                    yAdd -= lineSpread * n;
                }
                
                const p1 = new Vector(center.x + xAdd, center.y + yAdd);

                linesFromPoint(p1, progress);
            }
        }
    });

    const firstOrderStartTick = 60;
    const secondOrderStartTick = 100;
    if (tick >= firstOrderStartTick) {
        // select first order points
        
        


    } else if (tick >= secondOrderStartTick) {
        // select second order points
    }


    tick++;
}

function linesFromPoint(point, progress) {
     for (let j = 0; j < 4; j++) {
         let vXAdd = j % 2 === 0 ? 0.5 * lineSpread : 0;
         let vYAdd = j % 2 === 1 ? 0.5 * lineSpread : 0;
         if (j >= 2) {
             vYAdd *= -1;
             vXAdd *= -1;
         }
         const vec1 = new Vector(vXAdd, vYAdd);
         // console.log(vec1);

         vec1.multiplyBy(progress);
         const p2 = point.add(vec1);
         // console.log(p1, p2);

         push();
         // strokeWeight(4);
         line(point.x, point.y, p2.x, p2.y);
         pop();


     }
}