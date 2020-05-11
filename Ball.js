class Ball{
    constructor(x,y,radius){
        var options = {
           restitution: 1.35,
            density: 0.5
        }

        this.body = Bodies.rectangle(x,y,radius,radius,options);
        this.width = radius;
        this.height = radius;
        World.add(world,this.body)
  
         
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("blue");
        ellipse(0,0,this.width,this.height);
    }
}