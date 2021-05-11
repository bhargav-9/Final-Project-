class form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Submit");
        this.title=createElement("h2")
        this.resetbutton=createButton("Reset")
    }
        display(){
            this.input.position(200,200);
            this.button.position(200,300);
            this.title.position(400,100)
            this.title.html("Shooting Game")
            this.resetbutton.position(650,500);
            this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();
                Player.name=this.input.value();
                playerCount+=1;
                Player.index=playerCount;
                Player.update();
                Player.updateCount(playerCount);
                
            })
            this.resetbutton.mousePressed(()=>{
               this.resetbutton.hide();
              
               Game.update(0);
               var removeplayer = database.ref("players");
               removeplayer.remove();
               
               Player.updateCount(0);

            })
            
        }
        
}