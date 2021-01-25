class Chain {
    constructor(mybodyA, mybodyB) {
        var option = {
            bodyA:mybodyA,
            bodyB:mybodyB,
            length:10,
            stiffness:0.04
        }
        this.chain = Constraint.create(option);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(3);
        stroke("green");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}