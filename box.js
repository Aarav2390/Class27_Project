 class Box 

{
  constructor(x, y, w, h) 
  {
    let options = {
      frictionAir: 0.03,
      restitution: 0
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill("orange");
    rect(0, 0, this.w, this.h);
    pop();
  }
}