//generic stats object

let p1Name = "chemper";

let p1Stats = {
  hp: 128,
  mp: 72,
  atk: 60,
  def: 55,
  sp:25
}

let p2Name = "boomweisle";

let p2Stats = {
  hp: 70,
  mp: 130,
  atk: 40,
  def: 20,
  sp: 60
}

let battle = {

  attack: function(){
    
  },
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
