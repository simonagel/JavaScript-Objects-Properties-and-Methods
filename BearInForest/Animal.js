function Animal(name, weight) {
  this.name = name;
  this.weight = weight;

  this.getName = function() {
    return this.name;
  };
  this.getWeight = function() {
    return this.weight;
  };
  this.setWeight = function(weight) {
    this.weight = weight;
  };
}

function Bear(name, weight) {
  Animal.call(this, name, weight);
  this.maxWeight = 200;

  this.eatWolf = function(animal) {
    this.setWeight(this.getWeight() - this.getWeight() * 0.1);
    this.setWeight(this.getWeight() + animal.getWeight() / 2);
  };

  this.eatAnimal = function(animal) {
    if (animal.getName() !== "Wolf") {
      this.setWeight(this.getWeight() + animal.getWeight() * 0.3);
    } else {
      this.eatWolf(animal);
    }
    console.log(
        `The bear caught ${animal.getName()} and will gain weight`
      );
  };

  this.canBearMove = function() {
    return this.weight < this.maxWeight;
  };

  this.loseWeight = function() {
    console.log("The bear is losing 20% weight");
    this.weight = this.weight - this.weight * 0.2;
  };
}

Bear.prototype = new Animal();

function Rabbit(name, weight) {
  Animal.call(this, name, weight);
}

Rabbit.prototype = new Animal();

function Wolf(name, weight) {
  Animal.call(this, name, weight);
}

Wolf.prototype = new Animal();

function Deer(name, weight) {
  Animal.call(this, name, weight);
}

Deer.prototype = new Animal();
