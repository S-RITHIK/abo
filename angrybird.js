class bird{
    constructor(x, y) {
        var o1 = {
            restitution:0.8, 
            friction:1,
            density:1
        }
        this.body =  mb.rectangle(x, y, 50, 50, o1);
        this.width = 50;
        this.height = 50;
        mw.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill("white");
        strokeWeight(4);
        stroke("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}