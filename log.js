class log{
    constructor(x, y, h, angle) {
        var o1 = {
            restitution:0.8, 
            friction:1,
            density:3
        }
        this.body =  mb.rectangle(x, y, 20, h, o1);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body, angle)
        mw.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
    }
}