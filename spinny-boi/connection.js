class Connection {
    constructor(circles, originCircle, connectSpeed) {
        this.circles = circles;
        this.originCircle = originCircle;
        this.connectSpeed = connectSpeed;
        this.tick = 0;
    }

    draw() {
        const originPos = this.originCircle.position
        const lineLength = this.tick * this.connectSpeed;
        this.circles.forEach(circle => {
            const diffVector = circle.position.subtract(originPos);
            const maxLineLength = diffVector.getMagnitude();
            const actualLineLength = lineLength > maxLineLength ? maxLineLength : lineLength;

            diffVector.setMagnitude(actualLineLength);
            // console.log(diffVector);
            
            const lineEndVector = diffVector.add(originPos);

            line(originPos.x, originPos.y, lineEndVector.x, lineEndVector.y);

        });
        
        
        
        
        this.tick++;
    }
}