class game{
constructor(){

}
getState(){
    var GameStatetRef=database.ref('gameState')
    GameStatetRef.on("value",(data)=>{
        gameState = data.val();
          })
    }
  async  start(){
    if(gameState === 0){
        Player = new player();
        var playerCountRef = await database.ref('PlayerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          Player.getCount();
        }
        Form = new form()
        Form.display();
      }
      b1 =createSprite(400,400,250,30)
 b2 =createSprite(400,400,30,250)
  p1= createSprite(100, 100, 200, 30);
  p2= createSprite(200, 160, 30, 150);
  p3= createSprite(165, 250, 100, 30);
  p4= createSprite(130, 400, 30, 300);
  p5= createSprite(300, 650, 250, 30);
 // p6= createSprite(70, 850, 30, 100);
  p7= createSprite(410, 700, 30, 100);
  p8= createSprite(470, 750, 150, 30);
  p9= createSprite(400, 200, 200, 30);
  p10= createSprite(600, 150, 30, 200);
 // p11= createSprite(800, 750, 250, 30);
  p11= createSprite(665, 665, 30, 200);
  p12= createSprite(725, 575, 150, 30);
  p13= createSprite(800, 490, 30, 200);
  p14= createSprite(730, 375, 175, 30);
  
  Player1=createSprite(40,40,40,60);
  Player1.addImage(ls1)
//  Player1.velocityX=0;
 // Player1.velocityY=0;
  oppositePlayer=createSprite(840,700,40,60)
  oppositePlayer.addImage(rs2)
  //oppositePlayer.velocityX=0;
  //oppositePlayer.velocityY=0;

 Player1.scale=0.2;
  oppositePlayer.scale=0.2;
 // playersarr=[Player1,oppositePlayer]
 
    }
    play(){
        player.getPlayerInfo();
        if(allPlayers!== undefined){
       background("white")
    //    var x=20;
    //    var y=100;
    //  var index=0;
     
    //  for ( var plr in allPlayers){
    //    x=x+200;
    //     y=y+500
    //   index+=1;
    //   playersarr[index-1].x=x
    //   playersarr[index-1].y=y

    //  }

 
 if(keyDown(UP_ARROW) ){
  
  Player.y1-=5
  Player.x1+=0
  Player.update();
 }
 else if(keyDown(DOWN_ARROW)){
  Player.y1+=5;
  Player.x1+=0
  Player.update();
}
else if(keyDown(LEFT_ARROW)){
  Player.x1-=5;
  Player.y1+=0
  Player.update();
}
else if(keyDown(RIGHT_ARROW)){
  Player.x1+=5;
  Player.y1+=0
  Player.update();
}
// else if(keyDown("w")){
//   oppositePlayer.y-=5;
//   Player.update();
//  }
//  else if(keyDown("s")){
//   oppositePlayer.y+=5;
//   Player.update();
// }
// else if(keyDown("a")){
//   oppositePlayer.x-=5;
//   Player.update();
// }
// else if(keyDown("d")){
//   oppositePlayer.x+=5;
//   Player.update();

//     }
  }


    }
    update(State){
      database.ref('/').update({
        gameState:State
      }); 
    }
}
