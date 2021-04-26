function bounceOff(block1,ball){
    if (block1.x - ball.x < ball.width/2 + block1.width/2
      && ball.x -block1.x < ball.width/2 + block1.width/2
      && block1.y - ball.y < ball.height/2 + block1.height/2
      && ball.y - block1.y < ball.height/2 + block1.height/2) {
   block1.velocityY=block1.velocityY*(-1);
    ball.velocityY=ball.velocityY*(-1);
  }
  }