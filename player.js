class player{
    constructor(){
        this.name=null;
        this.index=null;
        this.health=100;
        this.x1=null;
        this.y1=null;
    }
    getCount(){
        var playerCountRef=database.ref('PlayerCount')
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
          })
    }
    update(){
       var playerindex="players/player"+this.index
       database.ref(playerindex).set({
           health:this.health,
           name:this.name,
           x:this.x1,
           y:this.y1
       })

    }
    updateCount(Count){
        database.ref("/").update({
            PlayerCount:Count
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
    }
