var bg,bg_img;
var astronaut,astronaut_img;
var gameState="PLAY";
const accessCode1="Hi"
const ac1="E"
const ac2="F"
const ac3="A"
const ac4="C"
const ac5="D"
const ac6="B"
function preload(){

  bg_img=loadImage("images/stars.gif")
  astronaut_img=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png","images/a6.png")
  ufo_Image=loadImage("images/alienUfo.png")
  sattelite_img=loadImage("images/sattelite_img.png")

  bg_sound=loadSound("Space_sound.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bg_img)
  bg.scale=3.5;
  bg.velocityX=-4

  astronaut=createSprite(200, 400, 50, 50);
  astronaut.addAnimation("walking",astronaut_img)

  bg_sound.play();
}

function draw() {
  background("white");  
  drawSprites();
if(gameState==="PLAY"){
  if(bg.x<600){
    bg.x=670
  }

  if(frameCount===100){
    gameState="TASK 1"
    
  }

  if(frameCount===300){
    gameState="TASK 2"
  }
}



if(gameState==="TASK 1"){
  task1();
  
}


if(gameState==="TASK 2"){
  task2();
}

}

function task1(){
  gameState="PLAY"
  ufo=createSprite(windowWidth/2+140,windowHeight/2)
  ufo.addImage(ufo_Image)
  ufo.scale=1.5
  message1=createElement('h1');
  message1.position(180,10)
  message1.html("DECODE THE ALIEN'S MESSAGE: ")
  message1.style('background','white');
  message2=createElement('h1')
  message2.position(10,45)
  message2.html(".... .. / .-- . / .- .-. . / .- .-.. .. . -. ... / ..-. .-. --- -- / .- -. --- - .... . .-. / .--. .-.. .- -. . - / .- .-. . / - .... . .-. . / .- -. -.-- / .- .-.. .. . -. ... / .. -. / - .... .. ... / .--. .-.. .- -. . - .-.-.-")
  message2.style('color','red');
  input1 = createInput("Code1")
  input1.position(180,180);
  input1.style('background', 'white');  
  button1 = createButton('Check');
  button1.position(180,220);
  button1.style('background', 'lightgrey');
  button1.mousePressed(()=>{
    if(authenticate(accessCode1,input1.value()))

    message4=createElement('h1');
    message4.position(180,100)
    message4.html("DECODED!")
    message4.style('background','white');

    // gameState="TASK 2"
    gameState!="TASK 1"
    console.log(gameState)
  })
  
  message3=createElement('h1');
  message3.position(180,windowHeight-100)
  message3.html("HINT: https://morsecode.world/international/translator.html USE THIS LINK TO DECODE")
  message3.style('background','white');
  
  
}

function authenticate(accessCode,actualCode){
  if(accessCode===actualCode)
  return true
  else 
  return false
}

function task2(){

  // gameState!="TASK 1"
  gameState="PLAY"
  ufo.visible= false
  input1.hide();
  button1.hide();
  message1.hide();
  message2.hide();
  message3.hide();
  message4.hide();
  sattelite=createSprite(windowWidth/2+400,windowHeight/2)
  sattelite.addImage(sattelite_img)
  sattelite.scale=1

  w1=createElement('h1');
  w1.position(300,100)
  w1.html("FIRE")
  w1.style('color','white');

  wA=createElement('h1');
  wA.position(500,200)
  wA.html("HEAT")
  wA.style('color','white');

  w2=createElement('h1');
  w2.position(300,150)
  w2.html("ELECTRIC")
  w2.style('color','white');

  wB=createElement('h1');
  wB.position(500,350)
  wB.html("POWER")
  wB.style('color','white');

  w3=createElement('h1');
  w3.position(300,200)
  w3.html("SPACE")
  w3.style('color','white');

  wC=createElement('h1');
  wC.position(500,250)
  wC.html("GALAXIES")
  wC.style('color','white');

  w4=createElement('h1');
  w4.position(300,250)
  w4.html("CORONA")
  w4.style('color','white');

  wD=createElement('h1');
  wD.position(500,300)
  wD.html("PANDEMIC")
  wD.style('color','white');

  w5=createElement('h1');
  w5.position(300,300)
  w5.html("WATER")
  w5.style('color','white');

  wE=createElement('h1');
  wE.position(500,100)
  wE.html("FISH")
  wE.style('color','white');

  w6=createElement('h1');
  w6.position(300,350)
  w6.html("ICE")
  w6.style('color','white');

  wF=createElement('h1');
  wF.position(500,150)
  wF.html("IGLOO")
  wF.style('color','white');

  // a=3, b=6, c=4., d=5., e=1, f=2.

  i1 = createInput("type the letter")
  i1.position(700,120);
  i1.style('background', 'white'); 

  i2 = createInput("type the letter")
  i2.position(700,170);
  i2.style('background', 'white'); 

  i3 = createInput("type the letter")
  i3.position(700,220);
  i3.style('background', 'white'); 

  i4 = createInput("type the letter")
  i4.position(700,270);
  i4.style('background', 'white'); 

  i5 = createInput("type the letter")
  i5.position(700,320);
  i5.style('background', 'white'); 

  i6 = createInput("type the letter")
  i6.position(700,370);
  i6.style('background', 'white'); 

  // b1 = createButton('Go');
  // b1.position(700,145);
  // b1.style('background', 'lightgrey');

  // b2 = createButton('Go');
  // b2.position(700,195);
  // b2.style('background', 'lightgrey');

  // b3 = createButton('Go');
  // b3.position(700,245);
  // b3.style('background', 'lightgrey');

  // b4 = createButton('Go');
  // b4.position(700,295);
  // b4.style('background', 'lightgrey');

  // b5 = createButton('Go');
  // b5.position(700,345);
  // b5.style('background', 'lightgrey');

  // b6 = createButton('Go');
  // b6.position(700,395);
  // b6.style('background', 'lightgrey');

  l1=createElement('h1');
  l1.position(250,100)
  l1.html("A.")
  l1.style('color','red');

  l2=createElement('h1');
  l2.position(250,150)
  l2.html("B.")
  l2.style('color','red');

  l3=createElement('h1');
  l3.position(250,200)
  l3.html("C.")
  l3.style('color','red');

  l4=createElement('h1');
  l4.position(250,250)
  l4.html("D.")
  l4.style('color','red');

  l5=createElement('h1');
  l5.position(250,300)
  l5.html("E.")
  l5.style('color','red');

  l6=createElement('h1');
  l6.position(250,350)
  l6.html("F.")
  l6.style('color','red');

  n1=createElement('h1');
  n1.position(475,100)
  n1.html("1.")
  n1.style('color','red');

  n2=createElement('h1');
  n2.position(475,150)
  n2.html("2.")
  n2.style('color','red');

  n3=createElement('h1');
  n3.position(475,200)
  n3.html("3.")
  n3.style('color','red');

  n4=createElement('h1');
  n4.position(475,250)
  n4.html("4.")
  n4.style('color','red');

  n5=createElement('h1');
  n5.position(475,300)
  n5.html("5.")
  n5.style('color','red');

  n6=createElement('h1');
  n6.position(475,350)
  n6.html("6.")
  n6.style('color','red');

  message6=createElement('h1');
  message6.position(180,50)
  message6.html("FIX THE SATELLITE BY MATCHING THE FOLLOWING WORDS")
  message6.style('color','red');

  b5 = createButton('MATCH IT!');
  b5.position(700,500);
  b5.style('background', 'lightgrey');

  b5.mousePressed(()=>{
  if(authenticate(ac1,i1.value()) || authenticate(ac2,i2.value()) ||authenticate(ac3,i3.value())||authenticate(ac4,i4.value())||authenticate(ac5,i5.value())||authenticate(ac6,i6.value()) ){

    message5=createElement('h1');
    message5.position(700,540)
    message5.html("IT'S A MATCH!")
    message5.style('color','red');
  }
})
}