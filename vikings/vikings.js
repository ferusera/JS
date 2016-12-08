var Viking = function (name, minHealth, maxHealth, minAttack, maxAttack){
  this.name = name;
  // this.health = Math.round(Math.random()*(maxHealth - minHealth) + minHealth);
  // this.attack = Math.round(Math.random()*(maxAttack - minAttack) + minAttack);
  this.health = maxHealth;
  this.attack = maxAttack;
}

var Attack = function (viking1, viking2) {

  this.updateHealth = function () {
    viking1.health -= viking2.attack;
    viking2.health -= viking1.attack;
  }

}

var fightTransmission = function (viking1, viking2, totalRounds) {

  this.beginFight = function () {
    console.log("Welcome to the lengendary fight between " + viking1.name + " and " + viking2.name + "!");
    console.log("We'll be playing to a maximum" + totalRounds + " rounds.");
    console.log("Let the wrestling beggin!");
    console.log("****************************");
  }

  this.updateFight = function (actualRound) {
    console.log("Round " + actualRound + ":");
    console.log(viking1.name + " has " + viking1.health + " life points left!");
    console.log(viking2.name + " has " + viking2.health + " life points left!");
    console.log("****************************");  
  }

  this.continueFight = function () {
    console.log("The fight conitnues...");
    console.log("****************************");
  }

  this.endFight = function (winner) {

    if (winner == 0) {
      console.log("The fight is over and it seems we have a tie!!")
      console.log("Well done " + viking1.name + " and " + viking2.name + ".");
      console.log("You are both equally powerful!");
    } else if (winner == 1) {
      console.log("Oh! And we have a winner!!");
      console.log("Give it up for " + viking1.name + "!!!");
    } else {
      console.log("Oh! And we have a winner!!");
      console.log("Give it up for " + viking2.name + "!!!");
    }
    
    console.log("What a great fight this was. See you all next time!");
    console.log("****************************");

  }

}

var FightResult = function(viking1, viking2, maxRounds) {

  this.determineWinner = function() {

    var v1KillsV2 = Math.floor(viking2.health/viking1.attack);
    var v2KillsV1 = Math.floor(viking1.health/viking2.attack);

    numberOfRounds = Math.min(v1KillsV2, v2KillsV1, maxRounds);
    var winner;

    if (numberOfRounds == maxRounds || v1KillsV2 == v2KillsV1) {
      winner = 0;
    } else {
      if (v1KillsV2 > v2KillsV1){
        winner = 1;
      } else {
        winner = 2;
      } 
    }

    return [numberOfRounds, winner];
  }
}

var FightingPit = function (viking1, viking2) {

  //initialize all variables
  // var maxRounds = Math.round(Math.random()*3 + 5);
  var maxRounds = 4;
  var calculateResult = new FightResult(viking1, viking2, maxRounds);
  var transmission = new fightTransmission(viking1, viking2, maxRounds);
  var attack = new Attack (viking1, viking2);

  function wrestle (fightResult) {

    for (round = 1; round <= fightResult[0]; round++){
      
      attack.updateHealth(); 
      transmission.updateFight(round);

      if (round < fightResult[0]){
        transmission.continueFight();
      }
    }
  }

  this.fightContoller = function () {
    var fightResult = calculateResult.determineWinner();
    transmission.beginFight();
    wrestle(fightResult);
    transmission.endFight(fightResult[1]);
  }
}

var pepe = new Viking ("Pepe", 0, 52, 0, 10);
var antonio = new Viking ("Antonio", 0, 52, 0, 10);
var fight = new FightingPit (pepe, antonio);
fight.fightContoller();

