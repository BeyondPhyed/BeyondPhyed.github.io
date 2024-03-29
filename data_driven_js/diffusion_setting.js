

//============================================================================================

function generateBall(howmany, state) {
  //set ball
  
    
  for (let i = 0; i < howmany; i++) {
    ball = new Sprite();
    ball.diameter = 2*rad;
    ball.shapeColor = (255);
    
    
    ball.x = random(rad, w-rad);
    ball.y = (i)*h/howmany;
    
    
    ball.vel.x = random(-5, 5);
    ball.vel.y = random(-5, 5);
    ball.bounciness = e; 
    
    if (state == 'trace') {
      ball.visible = false;
    } else {
      ball.visible = true;      
    }    
    balls[i] = ball;
  }
}

function generateBall2(howmany, state){
  
  for (let i = 0; i < howmany; i++) {
    ball = new Sprite();
    ball.diameter = 2*rad;
    ball.shapeColor = color(255, 0, 0);
    
    ball.x = 0.5*w + random(-0.08*w, 0.08*w);
    ball.y = 0.5*h + random(-0.08*h, 0.08*h);
        
    ball.vel.x = random(-1, 1);
    ball.vel.y = random(-1, 1);
    ball.bounciness = e; 
    
    balls2[i] = ball;
  }  
}


function setBoundary() {
  //set boundaries
  
  //left
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 10;
  floor.h = 2*h;
  floor.rotation = 0;
  floor.x = 5;
  floor.y = 0;

  //right
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 10;
  floor.h = 2*h;
  floor.rotation = 0;
  floor.x = w - 0.5*floor.w;
  floor.y = 0;
  
  //up
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = w;
  floor.h = 10;
  floor.rotation = 0;
  floor.x = 0.5*floor.w;
  floor.y = 0;
  
  //down
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = w;
  floor.h = 10;
  floor.rotation = 0;
  floor.x = 0.5*floor.w;
  floor.y = h;

}


function keyPressed() {	
  if (keyCode === DOWN_ARROW) {
		writer.close();
        writer.clear();
  } else if (keyCode === 32) { // Stop, when a spacebar is pressed.
    paused = !paused;
    if (paused){
      loop();
    } else {
      noLoop();      
    }
  }	
}
