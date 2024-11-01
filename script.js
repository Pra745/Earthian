 /* VARIABLES */
let env=100, ppl=100, money=100;
let level=0;
let loc=0;
let p1, assist;
let start, bt1, playBt;
let backImg;
let currentText, pos=0;
let nextBt1, nextBt2, nextBt3, nextBt4;
let screen=0;
let villageM;
let coins=10, st=5;
let choice1, choice2, choice3;
let screen2Img, screen3Img, screen4Img, screen5Img, screen6Img, screen7Img, screen8Img,screen9Img;
let font1, font2, font3, font4;
let score=0; let catcher, fallingObject;
let img1, img2, img3, img4, img5, img6, img7, img8, img9; 
let catcherImg;
let fallingImages = [];


/* PRELOAD LOADS FILES */
function preload(){
  backImg = loadImage("assets/background.png");
  villageM = loadImage("assets/village-man.png");
  assist= loadImage("assets/earthian1.png");
  screen2Img = loadImage("assets/screen2.jpg");
  screen3Img = loadImage("assets/screen3.jpg");
  screen4Img = loadImage("assets/screen4.jpg");
  screen5Img = loadImage("assets/screen5.jpg");
  screen6Img = loadImage("assets/screen6.jpg");
  screen7Img = loadImage("assets/screen7.jpg");
  screen8Img = loadImage("assets/screen8.jpg");
  screen9Img = loadImage("assets/screen9.jpg");
  font1 = loadFont('assets/PressStart2P-Regular.ttf');
  font2 = loadFont('assets/NovaMono-Regular.ttf');
  font3 = loadFont('assets/ShareTechMono-Regular.ttf');
  font4 = loadFont('assets/SpecialElite-Regular.ttf');
  img1 = loadImage("assets/fall1.png");
  img2 = loadImage("assets/fall2.png");
  img3 = loadImage("assets/fall3.png");
  img4 = loadImage("assets/fall4.png");
  img5 = loadImage("assets/fall5.png");
  img6 = loadImage("assets/fall6.png");
  //img7 = loadImage("assets/fall7.png");
  //img8 = loadImage("assets/fall8.png");
  //img9 = loadImage("assets/fall9.png");
  catcherImg = loadImage("assets/catch.png");
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(500,500);
  background('lightgreen');
  
  backImg.resize(500,500);
  villageM.resize(80,90);
  assist.resize(80,100);
  screen2Img.resize(500,500);
  screen3Img.resize(500,500);
  screen4Img.resize(500,500);
  screen5Img.resize(500,500);
  screen6Img.resize(500,500);
  screen7Img.resize(500,500);
  screen8Img.resize(500,500);
  screen9Img.resize(500,500);

  img1.resize(100,0); 
  img2.resize(100,0); 
  img3.resize(100,0); 
  img4.resize(100,0);
  img5.resize(100,0);
  img6.resize(100,0);
  //img7.resize(100,0);
  //img8.resize(100,0);
  //img9.resize(100,0);
  catcherImg.resize(150,0);

  fallingImages=[img1,img2,img3,img4,img5,img6];
  
  frameRate(10);
  splashScreen();

}

/* DRAW LOOP REPEATS */
function draw() {  
  if (screen==0)
  {
    if (start.mouse.presses())
    {
      screen=1;
      introScreen();
    }
  }
  else if (screen==1)
  {
    if (bt1.mouse.presses())
    {
      screen=2;
      instructions();
    }
  }
    else if (screen==2)
    {
     if (playBt.mouse.presses())
    {
      screen=3;
      playScreen1();
    }
  }
  else if (screen==3)
  {
    if (nextBt1.mouse.presses())
    {
      screen=4;
      playScreen2();
    }
  }
  else if (screen==4)
  {
    if (choice1.mouse.presses())
    {
      env=env+30; ppl=ppl+20; money=money+10;
      st=st+20;
      screen=5;
      playScreen3();
    }
    else if (choice2.mouse.presses())
    {
      env=env+10; ppl=ppl+10; money=money-30;
      st=st-20;
      screen=5;
      playScreen3();
    }
    else if (choice3.mouse.presses())
      {
        env=env+10; ppl=ppl+10; money=money+10;
        st=st+10;
        screen=5;
        playScreen3();
      }
  }
  else if (screen==5)
    {
      if (choice1.mouse.presses())
      {
        env=env+30; ppl=ppl+30; money=money+20;
        st=st+30;
        screen=6;
        playScreen4();
      }
      else if (choice2.mouse.presses())
      {
        env=env+10; ppl=ppl+10; money=money+5;
        st=st+20;
        screen=6;
        playScreen4();
      }
      else if (choice3.mouse.presses())
        {
          env=env+10; ppl=ppl+10; money=money-30;
          st=st+20;
          screen=6;
          playScreen4();
        }
    }
  else if (screen==6)
    {
      if (choice1.mouse.presses())
      {
        env=env+30; ppl=ppl+30; money=money+30;
        st=st+30;
        screen=7;
        catcherGame();
      }
      else if (choice2.mouse.presses())
      {
        env=env+5; ppl=ppl-5; money=money-30;
        st=st-20;
        screen=7;
        catcherGame();
      }
      else if (choice3.mouse.presses())
        {
          env=env-10; ppl=ppl+5; money=money+5;
          st=st-5;
          screen=7;
          catcherGame();
        }
    }
  else if (screen==7)
  {
    background('#D3FFCF');
    
    //If fallingObject reaches bottom, move back to random position at top.
    if (fallingObject.y >= height)
    {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = 7;
      fallingObject.img = random(fallingImages);
      //score = score - 1;
    }

    //Move catcher
    if(kb.pressing("left"))
    { catcher.vel.x = -7; }
    else if(kb.pressing("right"))
    { catcher.vel.x = 7; }
    else
    { catcher.vel.x = 0; }

    //Stop catcher at edges of screen
    if(catcher.x < 50)
    { catcher.x = 50; }
    else if(catcher.x > 450)
    { catcher.x = 350; }

    //If fallingObject collides with catcher, move back to random position at top
    if(fallingObject.collides(catcher))
    {
      score = score + 1;
      moveBack();
    }


    //Draw the score to screen
    fill(0, 128, 128);
    textSize(20);
    text("Score = " + score, 20, 50);

    //To create win state
    if (score > 5)
    {
      
      background('#D3FFCF');
      catcher.pos = {x: -100, y: -100};
      fallingObject.pos = {x: -200, y: -200};
      textAlign(LEFT);
      textSize(20);
      fill('#1D6018');
      text("You win!", width/2-50, height/2 -50);
      textSize(15);
      text("Click to move to the next question", width/2-110, height/2 -30);
      if(mouseIsPressed)
      {
        
        screen=8;
        playScreen5();
      }
    }

    allSprites.debug = mouse.pressing();
    
  }
  else if (screen==8)
    {
      if (choice1.mouse.presses())
      {
        env=env+10; ppl=ppl-5; money=money-20;
        st=st-5;
        screen=9;
          overviewScreen();
      }
      else if (choice2.mouse.presses())
      {
        env=env+30; ppl=ppl+25; money=money+20;
        st=st+20;
        screen=9;
          overviewScreen();
      }
      else if (choice3.mouse.presses())
        {
          env=env-30; ppl=ppl-20; money=money-30;
          st=st-30;
          screen=9;
          overviewScreen();
        }
    }

}

/* FUNCTIONS */

function moveBack()
{
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = 7;
      fallingObject.direction = "down";
      fallingObject.image = random(fallingImages);

}

//Screens
function splashScreen()
{
  image(backImg,0,0);

  textFont(font1);

  //Create Start button
  start = new Sprite(width/2+20,height/2+150);
  start.w = 170;
  start.h=60;
  start.collider='s';
  start.color='green';
  start.textSize=30;
  start.textColor='white';
  start.text='Start';
  
}

function introScreen()
{
  background('lightgreen');
  image(screen2Img,0,0);
  start.pos={x:-100,y:-100};

  fill('white');
  rect(50,50,400,400,15);

  image(assist,width/2-40,height/2-260);
  
  //Set current text
  textSize(16);
  textFont(font2);
  fill('black');
  currentText = "Nice to have you here. \nWe're embarking on a great journey \nto fight local and global problems, \nrelated to SDGs. The main aim of \nthe game is to build awareness and \nactivate the mind of youth towards \nproblems the world is facing today. \nJoin Earthian in this quest to \nsustainability by making greener choices. \nAnswer the questions and see if you \nbrought positive impact on the \nvillage or not."
  typeWriter(currentText,0,60,100,30);

  //Create next button
  bt1 = new Sprite(width/2+20,height/2+150);
  bt1.w = 250;
  bt1.h=60;
  bt1.collider='s';
  bt1.color='green';
  bt1.textSize=22;
  bt1.textColor='white';
  bt1.text='Are you Ready?';
  
}

function instructions()
{
  background('yellow');
  image(screen3Img,0,0);
  bt1.pos={x:-100,y:-100};

  //Set current text
  textSize(18);
  textFont(font2);
  fill('black');
  currentText = "Instructions:\n- You are a lost tourist who reached a \ndeserted village.\n- Read on the problems of the village by the \nVillage Headman.\n- For a hope of a new future, you embark on \na journey to make better choices and create a \nsustainable future.\n- Earthian will guide you and tell you a \nfew solutions to the situations.\n- Choose one and be with the flow, answering, \ntackling the situations arising.\n- Frequently check on the three pillars of \nsustainability, indicativing your action's \nimpact on society, economy and environment.\n- Make wise decisions.";
  typeWriter(currentText,0,20,30,30);

  //Create play button
  playBt = new Sprite(width/2+20,height/2+200);
  playBt.w = 200;
  playBt.h=60;
  playBt.collider='s';
  playBt.color='green';
  playBt.textSize=22;
  playBt.textColor='white';
  playBt.text="Let's Play!";

}

function playScreen1()
{
  background('pink');
  image(screen4Img,0,0);
  playBt.pos={x:-100,y:-100};

  textFont(font3);

  //Set current text
  textSize(18);
  fill('white');
  strokeWeight=3;
  stroke('#748D2B');
  rect(30,270,450,200,15);

  //Set character
  image(villageM,20,210);

  fill('#748D2B');
  currentText = "I am Prithvi Ji, the village leader. \nPlease look into our problems \nas we have a hope from you young person.";
  typeWriter(currentText,0,95,300,30);

  //Create next button
  nextBt1 = new Sprite(width/2+190,height/2+190,50,50,'s');
  nextBt1.d=50;
  nextBt1.color='#748D2B';
  nextBt1.textSize=20;
  nextBt1.textColor='white';
  nextBt1.text=">";
  
}

function playScreen2()
{
  background('#33CF19');
  image(screen5Img,0,0);
  nextBt1.pos={x:-100,y:-100};

  

  //Set current text
  textSize(18);
  fill('white');
  strokeWeight=3;
  stroke('#DBA105');
  rect(30,200,450,280,15);

  //Set character
  image(assist,20,190);

  fill('#DBA105');
  currentText = "I am your game assistant, Earthian. The \nland is barren and uncultivated. We \nneed to improve its quality to start \ngrowing food and crops.";
  typeWriter(currentText,0,100,230,30);

  //Create three buttons
  choice1 = new Sprite(250,350);
  choice1.w=350;
  choice1.h=40;
  choice1.collider='s';
  choice1.color='#DBA105';
  choice1.textSize=17;
  choice1.textColor='white';
  choice1.text="Grow seeds that improve its nutrition";

  choice2 = new Sprite(250,400);
  choice2.w=350;
  choice2.h=40;
  choice2.collider='s';
  choice2.color='#DBA105';
  choice2.textSize=19;
  choice2.textColor='white';
  choice2.text="Donate money";

  choice3 = new Sprite(250,450);
  choice3.w=350;
  choice3.h=40;
  choice3.collider='s';
  choice3.color='#DBA105';
  choice3.textSize=19;
  choice3.textColor='white';
  choice3.text="Water it";

}

function playScreen3()
{
  background('teal');
  image(screen6Img,0,0);
  choice1.pos={x:-100,y:-100};
  choice2.pos={x:-100,y:-100};
  choice3.pos={x:-100,y:-100};

  strokeWeight=3;
  stroke('#FF7C05');

  //Set current text
  textSize(18);
  fill('white');
  
  rect(30,200,450,280,15);

  //Set character
  image(assist,20,190);

  fill('#FF7C05'); 
  currentText = "Great job! Let's move further. \nDue to increasing barren land, there's \nnot much yeild and shortage of food, \nlet's solve this problem and help them?";
  typeWriter(currentText,0,100,230,30);

  //Create three buttons
  choice1 = new Sprite(250,350);
  choice1.w=300;
  choice1.h=40;
  choice1.collider='s';
  choice1.color='#FF7C05';
  choice1.textSize=19;
  choice1.textColor='white';
  choice1.text="Harvest crops planted";

  choice2 = new Sprite(250,400);
  choice2.w=300;
  choice2.h=40;
  choice2.collider='s';
  choice2.color='#FF7C05';
  choice2.textSize=17;
  choice2.textColor='white';
  choice2.text="Tie up with a local food charity";

  choice3 = new Sprite(250,450);
  choice3.w=300;
  choice3.h=40;
  choice3.collider='s';
  choice3.color='#FF7C05';
  choice3.textSize=19;
  choice3.textColor='white';
  choice3.text="Open up a restuarent";

}

function playScreen4()
{
  background('light-green');
  image(screen7Img,0,0);
  choice1.pos={x:-100,y:-100};
  choice2.pos={x:-100,y:-100};
  choice3.pos={x:-100,y:-100};

  strokeWeight=3;
  stroke('#7EC684');

  //Set current text
  textSize(18);
  fill('white');

  rect(30,200,450,280,15);

  //Set character
  image(assist,20,190);

  fill('#7EC684');
  
  currentText = "Great job! Let's move further. \nThere's a lot of waste generated these \ndays and uncleanliness is rising, let's \nsolve this problem and help them?";
  typeWriter(currentText,0,100,230,30);

  //Create three buttons
  choice1 = new Sprite(250,350);
  choice1.w=300;
  choice1.h=40;
  choice1.collider='s';
  choice1.color='#7EC684';
  choice1.textSize=18;
  choice1.textColor='white';
  choice1.text="Clean it yourself";

  choice2 = new Sprite(250,400);
  choice2.w=300;
  choice2.h=40;
  choice2.collider='s';
  choice2.color='#7EC684';
  choice2.textSize=18;
  choice2.textColor='white';
  choice2.text="Hire cleaning people from city";

  choice3 = new Sprite(250,450);
  choice3.w=300;
  choice3.h=40;
  choice3.collider='s';
  choice3.color='#7EC684';
  choice3.textSize=18;
  choice3.textColor='white';
  choice3.text="Awareness first";

}

function playScreen5()
{
  background('yellow');
  image(screen8Img,0,0);
  choice1.pos={x:-100,y:-100};
  choice2.pos={x:-100,y:-100};
  choice3.pos={x:-100,y:-100};

  strokeWeight=3;
  stroke('#29A0F8');

  //Set current text
  textSize(18);
  fill('white');

  rect(30,200,450,280,15);

  //Set character
  image(assist,20,190);
  
  fill('#29A0F8');
  
  currentText = "Great job! Let's move further. \nIt looks like ages since it rained due \nto the barren land and the wells have \ndried, let's solve this problem?";
  typeWriter(currentText,0,100,230,30);

  //Create three buttons
  choice1 = new Sprite(250,350);
  choice1.w=300;
  choice1.h=40;
  choice1.collider='s';
  choice1.color='#29A0F8';
  choice1.textSize=17;
  choice1.textColor='white';
  choice1.text="Bring river water to the village";

  choice2 = new Sprite(250,400);
  choice2.w=300;
  choice2.h=40;
  choice2.collider='s';
  choice2.color='#29A0F8';
  choice2.textSize=19;
  choice2.textColor='white';
  choice2.text="Collect rainwater";

  choice3 = new Sprite(250,450);
  choice3.w=300;
  choice3.h=40;
  choice3.collider='s';
  choice3.color='#29A0F8';
  choice3.textSize=19;
  choice3.textColor='white';
  choice3.text="Get from city";

}

function overviewScreen()
{
  background('yellow');
  image(screen9Img,0,0);
  
  choice1.pos={x:-100,y:-100};
  choice2.pos={x:-100,y:-100};
  choice3.pos={x:-100,y:-100};

  strokeWeight=3;
  stroke('white');
  textFont(font4);

  fill('white');
  rect(50,50,400,400,15);

  image(assist,width/2-40,height/2-220);

  textSize(20);
  fill('#19A1E4');
  text("Great Job, young mind!! \nYou have successfully completed the \ngame. Let's look at your progress and \nhow much hope you have provided \nmore to our sweet village people.",width/2-190,height/2-90);
  textSize(25);
  fill('#5A9610');
  text("Environment: "+env,width/2-140,height/2+50);
  fill('#FF359C');
  text("Social: "+ppl,width/2-140,height/2+80);
  fill('#FFC700');
  text("Economy: "+money,width/2-140,height/2+110);
  fill('#C47C45');
  text("Satisfaction score: "+st,width/2-140,height/2+140);

  
}

function catcherGame()
{
  background('#D3FFCF');

  choice1.pos={x:-100,y:-100};
  choice2.pos={x:-100,y:-100};
  choice3.pos={x:-100,y:-100};

  //Create catcher 
  catcher = new Sprite(200,420,100,20);
  catcher.color = color(95,158,160);
  catcher.collider = 'k';
  catcher.img = catcherImg;

  textSize(10);

  //Create falling object
  fallingObject = new Sprite(100,0,10);
  fallingObject.color = color('green');
  fallingObject.rotationLock = true;
  fallingObject.vel.y = 7;
  fallingObject.img = random(fallingImages);
}

//Produce a typewriter effect
function typeWriter(sentence, n, x, y, speed) 
{
  if (n < (sentence.length)) 
  {
    text(sentence.substring(0, n+1), x, y);
    n++;
    setTimeout(function() {typeWriter(sentence, n, x, y, speed)}, speed);
  }
}
