class Papper{
    constructor(x,y){
    var options ={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.rectangle(x,y,20,20,options);
    this.width=20;
    this.height=20;
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}
