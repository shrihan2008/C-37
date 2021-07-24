class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
    player = new Player();
    var playerCountref=await database.ref('playerCount').once('value'); 

    if(playerCountref.exists()){
      playerCount=playerCountref.val()
      player.getCount()
    }
      //player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    textColor(184)
    text("GAME ON",200,200)
  }
}
