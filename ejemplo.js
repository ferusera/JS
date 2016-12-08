var Car = function(model, noise){
  this.model = model;
  this.noise = noise;
  this.nWheels = 4;
}

Car.prototype.makeNoise = function(){
  console.log(this.noise + "!!!!!");
}


var car = new Car("golf", "brrr");
console.log(car.model);
console.log(car.nWheels);
car.makeNoise();

car.nWheels = 3;
console.log(car.nWheels);