//generic stats object

let p1Name = "chemper";

let p1Stats = {
  hp: 128,
  mp: 72,
  atk: 60,
  def: 55,
  sp:25
}

let p1Moves = {
  charge: function(){
    let pain = Math.random();
    let bonus = this.stats.atk*0.5*Math.random();
    if (pain < 0.5){
      this.stats.hp - bonus/2;
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  },

  roundhouseKick: function(){
    let baseDamage = this.stats.atk*0.50;
    let chance = Math.random();
    if (chance < 0.33){
      return baseDamage;
    }
    else if(chance < 0.66){
      return baseDamage*2;
    }
    else{
      return baseDamage*3;
    }
  },

  lightningSlap: function(){
    if (this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let slap = Math.ceil(this.stats.sp*(2/3));
      let bonus = this.stats.sp*Math.random()
    return slap + bonus;
    }
  
  },
  furyStrike: function(){
    let bonus = this.stats.atk*Math.random();
    let pain = Math.random();
    if (pain < 0.5){
      this.stats.hp - 
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  }
}
let p1battle = {
  // not finished
    attack: function(mv){
      if (mv == 1){
        return this.moves.charge();
      }
      else if (mv == 2){
        return this.moves.roundhouseKick();
      }
      else if (mv == 3){
        return this.moves.lightningSlap();
      }
      else if (mv == 4){
        return this.moves.furyStrike();
      }
    },
    defend: function(atkmv){
      let rawDamage = atkmv - this.stats.def;
      this.stats.hp = this.stats.hp - rawDamage;
      if (this.stats.hp < 0){
        this.stats.hp = 0;
      }
    }
  }
let p2Name = "boomweisle";

let p2Stats = {
  hp: 70,
  mp: 130,
  atk: 40,
  def: 20,
  sp: 60
}

let p2Moves = {

  hydroPump: function(){
    if (this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random;
      let pump = math.ceil(this.stats.sp/3);
      if (tetradice <0.10){
        return pump;
      }
      else if (tetradice <0.30){
        return 2*pump;
      }
      else if (tetradice <0.60){
        return 3*pump;
      }
      else{
        return 4*pump;
      }
    }
  },

  lightningSlap: function(){
    if (this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let slap = Math.ceil(this.stats.sp*(2/3));
      let bonus = this.stats.sp*Math.random()
    return slap + bonus;
    }
  },

  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75;
    let bonus = this.stats.atk*0.5*Math.random();
    return baseDamage + bonus;
  },

  furyStrike: function(){
    let bonus = this.stats.atk*Math.random();
    let pain = Math.random();
    if (pain < 0.5){
      this.stats.hp - 
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  }
}

let p2battle = {
  // not finished
    attack: function(mv){
      if (mv == 1){
        return this.moves.hydroPump();
      }
      else if (mv == 2){
        return this.moves.lightningSlap();
      }
      else if (mv == 3){
        return this.moves.razorPunch();
      }
      else if (mv == 4){
        return this.moves.furyStrike();
      }
    },
    defend: function(atkmv){
      let rawDamage = atkmv - this.stats.def;
      this.stats.hp = this.stats.hp - rawDamage;
      if (this.stats.hp < 0){
        this.stats.hp = 0;
      }
    }
  }































  // pool of moves

let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk*0.75;
    let bonus = this.stats.atk*0.5*Math.random();
    return baseDamage + bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = this.stats.atk*0.5*Math.random();
    if (pain < 0.5){
      this.stats.hp - bonus/2;
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  },
  roundhouseKick: function(){
    let baseDamage = this.stats.atk*0.50;
    let chance = Math.random();
    if (chance < 0.33){
      return baseDamage;
    }
    else if(chance < 0.66){
      return baseDamage*2;
    }
    else{
      return baseDamage*3;
    }
  },
  furyStrike: function(){
    let bonus = this.stats.atk*Math.random();
    let pain = Math.random();
    if (pain < 0.5){
      this.stats.hp - 
      return this.stats.atk+bonus;
    }
    else{
      return this.stats.atk+bonus;
    }
  }
}
let magic = {
  hydroPump: function(){
    if (this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetradice = Math.random;
      let pump = math.ceil(this.stats.sp/3);
      if (tetradice <0.10){
        return pump;
      }
      else if (tetradice <0.30){
        return 2*pump;
      }
      else if (tetradice <0.60){
        return 3*pump;
      }
      else{
        return 4*pump;
      }
    }
  },
  lightningSlap: function(){
    if (this.stats.mp >= 10){
      this.stats.mp = this.stats.mp - 10;
      let slap = Math.ceil(this.stats.sp*(2/3));
      let bonus = this.stats.sp*Math.random()

    }

}
