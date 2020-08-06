class Particles{
    constructor(x,y){
       var options={
     
 
     restitution:0.4

       }
       this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    
    }
    display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}