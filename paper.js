class paper {
    constructor(x, y, radius) {
      var options = {
        'restitution':0.3,
        'friction':0,
        'density':1.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.image=loadImage("paper.png");
      World.add(world, this.body);
      }
    display(){
  
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
  
      
    }
    };