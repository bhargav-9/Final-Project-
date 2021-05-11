var p1,p2,p3,p4,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16;
var b1,b2;
var Player1,oppositePlayer;
var database;
var gameState=0;
var playerCount;
var Form,Player,Game;
var allPlayers;
var ls1,rs1,ds1,us1;
var ls2,rs2,ds2,us2;
var playersarr
function preload(){
 ls1=loadImage("soldier/soldier.png")
 rs1=loadImage("soldier/soldier1.png")
 ds1=loadImage("soldier/soldier2.png")
 us1=loadImage("soldier/soldier3.png")
 ls2=loadImage("Opposoldier/Opposoldier.png")
 rs2=loadImage("Opposoldier/Opposoldier1.png")
 ds2=loadImage("Opposoldier/Opposoldier2.png")
 us2=loadImage("Opposoldier/Opposoldier3.png")

}
function setup() {
  createCanvas(900,750);
   database=firebase.database();
  
  
  Game=new game();
  Game.getState()
  Game.start();
  //Form=new form();
  //Player=new player();
  
}

function draw() {
  background(255,255,255);  
 // Form.display();
   if (playerCount==2){
     Game.update(1);
   }
   
   if(gameState==1){
     Game.play();
   }
  drawSprites();

}