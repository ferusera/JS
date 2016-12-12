var Viking = function (name, minHealth, maxHealth, minAttack, maxAttack){
  this.name = name;
  this.health = Math.round(Math.random()*(maxHealth - minHealth) + minHealth);
  this.attack = Math.round(Math.random()*(maxAttack - minAttack) + minAttack);
}