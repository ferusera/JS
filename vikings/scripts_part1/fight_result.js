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