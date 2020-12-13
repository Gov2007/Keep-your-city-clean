class paper {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.x = x;
      this.y = y;
      this.r = r
      this.body = Bodies.circle(this.x, this.y, this.r/2, options)

      


      World.add(world, this.body);       
    }
    display(){
     push();
     
     ellipseMode(CENTER);
      strokeWeight(4);
      stroke("white");
       fill(255);
       ellipse(this.body.position.x, this.body.position.y, this.body.r, this.body.r);
     pop();
     }

    
  };

 