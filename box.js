class box{
    constructor(x, y, w, h) {
        var o1 = {
            restitution:0.8, 
            friction:1,
            density:1
        }
        this.body =  mb.rectangle(x, y, w, h, o1);
        this.width = w;
        this.height = h;
        mw.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
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