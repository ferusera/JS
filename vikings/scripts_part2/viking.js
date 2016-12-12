var Fighter = function (type) {
  this.name = name;

  if (type == "s") {
  	healthScope = [40, 80];
  	attackScope = [5, 10];
  } else {
  	healthScope = [70, 120];
  	attackScope = [10, 20];
  }

  this.health = Math.round(Math.random()*(healthScope[1] - healthScope[0]) + healthScope[0]);
  this.attack = Math.round(Math.random()*(attackScope[1] - attackScope[0]) + attackScope[0]);
}