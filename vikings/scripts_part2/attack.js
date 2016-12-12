var Attack = function (viking1, viking2) {

  this.updateHealth = function () {
    viking1.health -= viking2.attack;
    viking2.health -= viking1.attack;
  }

}