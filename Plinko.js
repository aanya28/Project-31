class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = radius;
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellispeMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
  };
