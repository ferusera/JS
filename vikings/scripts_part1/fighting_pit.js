var FightingPit = function (viking1, viking2) {

  //initialize all variables
  var maxRounds = Math.round(Math.random()*3 + 5);
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