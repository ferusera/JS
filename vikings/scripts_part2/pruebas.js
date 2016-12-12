var Fighter = function (type, name) {
  this.name = name;
  this.type = type;
  this.id += 1;
  
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


var pepe = new Fighter ("s");
console.log(pepe.id);

var juan = new Fighter ("s");
console.log(pepe.id);

var antonio = new Fighter ("s");
console.log(pepe.id);
