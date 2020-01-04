function Forest(name) {
  this.name = name;
  this.animals = [];
  this.bear = new Bear("Bear", 150);

  this.spendDay = function() {
    if (this.willBearEat() && this.animal.length > 0) {
      this.bearEat();
    }
  };

  this.willBearEat = function() {
    if (!this.bear.canBearMove()) {
      console.log(
        "The bear is overweight and can't move " + this.bear.getWeight()
      );
      this.bear.loseWeight();
      return;
    }
    var percentToEat = getRandomNumber(1, 100);
    if (percentToEat <= 30) {
      this.bearEat();
    }
  };

  this.bearEat = function() {
    var randomAnimal = getRandomNumber(0, this.animals.length - 1);
    this.bear.eatAnimal(this.animals[randomAnimal]);
    this.animals.splice(randomAnimal, 1);
  };

  this.populateAnimals = function() {
    var numberOfAnimals = getRandomNumber(15, 20);
    for (var i = 0; i < numberOfAnimals; i++) {
      var typeOfAnimal = getRandomNumber(1, 3);
      switch (typeOfAnimal) {
        case 1:
          this.animals.push(new Rabbit("Rabbit", 15));
          break;
        case 2:
          this.animals.push(new Deer("Deer", 25));
          break;
        case 3:
          this.animals.push(new Wolf("Wolf", 50));
          break;
        default:
          console.log("Error");
          break;
      }
    }
  };
}
