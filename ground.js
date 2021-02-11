class ground {
    constructor(x, y, w, h) {
     var o = {
        isStatic:true
    }
       this.body = mb.rectangle(x, y, w, h, o);
       this.width = w;
       this.height = h;
       mw.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}