class Circle {
    constructor(position, velocity, rotationOrigin, size, direction) {
        this.position = new Vector(position);
        this.velocity = velocity;
        this.rotationOrigin = new Vector(rotationOrigin.x, rotationOrigin.y);
        this.size = size;
        this.rotationRadius = position.subtract(rotationOrigin).getMagnitude();
        this.direction = typeof direction === "number" ? direction : Circle.CLOCKWISE;

    }

    update() {
        const angularVel = this.velocity / this.rotationRadius;
        const newVect = new Vector(1, 0);
        const cAngle = this.position.subtract(this.rotationOrigin).getAngle();
        const newAngle = cAngle + (angularVel * this.direction);
        // console.log(newAngle);

        newVect.setAngle(newAngle);
        newVect.setMagnitude(this.rotationRadius);

        const newPos = this.rotationOrigin.add(newVect);

        this.position = newPos;

    }

    draw() {
        ellipse(this.position.x, this.position.y, this.size);
    }

    setOrigin(newPos) {
        this.rotationOrigin = newPos;
    }

    moveOrigin(x, y) {
        if (typeof x !== "number") {
            x = 0;
        }
        if (typeof y !== "number") {
            y = 0;
        }

        const moveVector = new Vector(x, y);
        this.rotationOrigin.addTo(moveVector);

    }


    setPartners(partners) {

    }







    static get CLOCKWISE() {
        return 1;
    } 

    static get COUNTERCLOCKWISE() {
        return -1;
    }


}
