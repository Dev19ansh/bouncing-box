var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=5;
    ball.velocityY=8;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.x - ball.x < ball.width/2 + block1.width/2
        && ball.x -block1.x < ball.width/2 + block1.width/2
        && block1.y - ball.y < ball.height/2 + block1.height/2
        && ball.y - block1.y < ball.height/2 + block1.height/2  ) {
        ball.shapeColor = "blue";
        bounceOff(block1,ball);
       
    }

    if(block2.x - ball.x < ball.width/2 + block2.width/2
        && ball.x -block2.x < ball.width/2 + block2.width/2
        && block2.y - ball.y < ball.height/2 + block2.height/2
        && ball.y - block2.y < ball.height/2 + block2.height/2  ) {
        ball.shapeColor = "orange";
        bounceOff(block2,ball);
       
    }

    if(block3.x - ball.x < ball.width/2 + block3.width/2
        && ball.x -block3.x < ball.width/2 + block3.width/2
        && block3.y - ball.y < ball.height/2 + block3.height/2
        && ball.y - block3.y < ball.height/2 + block3.height/2  ) {
        ball.shapeColor = "green";
        bounceOff(block3,ball);
        
    }

    if(block4.x - ball.x < ball.width/2 + block4.width/2
       && ball.x -block4.x < ball.width/2 + block4.width/2
       && block4.y - ball.y < ball.height/2 + block4.height/2
       && ball.y - block4.y < ball.height/2 + block4.height/2  ) {
        ball.shapeColor = "blue";
        bounceOff(block4,ball);
       
    }
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
        drawSprites();
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    


