class Launcher{
  constructor(body1,point1){
  var  options={
    bodyA : body1,
    pointB :point1,
    stiffness : 0.1
   }
  this.launcher = Constraint.create(options);
  World.add(world,this.launcher);
}
display(){

if (this.launcher.bodyA){
  var pointA = this.launcher.bodyA.position;
  var pointB = this.launcher.pointB;
  strokeWeight(2);
  line (pointA.x ,pointA.y ,pointB.x ,pointB.y);
}
}
fly(){
this.launcher.bodyA = null;

}
attach(stoneObj){
  this.launcher.bodyA = stoneObj;

}
  } 