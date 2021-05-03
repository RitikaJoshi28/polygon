class Polygon
{
    constructer()
    {
        bodyA:bodyA;
        bodyB:bodyB;
       pointA:pointA;
        pointB:pointB;
       polygon=Bodies.circle(50,200,20);
        World.add(world,polygon);
        slingshot=new slingShot(this.polygon,{x:200,y:100});

        polygon.body.loadImage("polygon.png");
        }
        fly()
        {
           this.polygon.bodyA=null;
        }
            
        
    display()
    {
      polygon(CENTER);
      polygon(polygon_img,polygon.positionX,polygon.positionY,40,40);
      

      }
    }
}