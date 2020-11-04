class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      this.radius = radius;
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellispeMode(CENTER);
      ellipse(pos.x, pos.y, this.radius);
    }
  };
