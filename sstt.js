class pathhar {
    constructor(x,y,width,height){
      var op1={
         isStatic:false
      }
    this.body=Bodies.rectangle(x,y,width,height,op1)
  
    this.width=width;
    this.height=height;
    this.image = loadImage("stone.png")
    World.add(world,this.body)


    }
  display(){
    
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
    
  }