

function setup() {

}

function draw() 
{
  background("Yellow");
  if(keyIsDown(LEFT_ARROW)){
    background("Blue")
  } 
   if(keyIsDown(RIGHT_ARROW)){
    background("purple")
  }  
  if(keyIsDown(UP_ARROW)){
    background("red")
  } 
   if(keyIsDown(DOWN_ARROW)){
    background("green")
  }
}
