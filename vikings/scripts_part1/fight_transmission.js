var fightTransmission = function (viking1, viking2, totalRounds) {

  this.beginFight = function () {
    console.log("Welcome to the lengendary fight between " + viking1.name + " and " + viking2.name + "!");
    presentFighters();
    console.log("We'll be playing to a maximum of " + totalRounds + " rounds.");
    console.log("Let the wrestling beggin!");
    console.log("****************************");
  }

  function presentFighters () {
    console.log(viking1.name + " has a health of " + viking1.health + " and strikes with a strengh of " + viking1.attack);
    console.log(viking2.name + " has a health of " + viking2.health + " and strikes with a strengh of " + viking2.attack);
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