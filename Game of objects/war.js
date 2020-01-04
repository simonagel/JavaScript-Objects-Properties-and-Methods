function War(name) {
  this.name = name;
  this.army = [];
  this.dragon = new Dragon(20000, 400, "Drogon");

  this.fight = function() {
    this.armyAttack();
    this.dragonAttack();
  };

  this.priestAttack = function(){
    if (this.getRandomAliveSoldier()){
      
    }
  };

  this.dragonAttack = function() {
    if (getRandomNumber(1, 2) === 1){
      var soldier = this.getRandomAliveSoldier();
      this.dragon.attackEnemy(soldier);
    }else{ this.dragon.specAttack(this.army) }
  };

  this.getRandomAliveSoldier = function() {
    while (true) {
      var randomSolider = getRandomNumber(0, this.army.length - 1);
      if (this.army[randomSolider].isAlive()) {
        return this.army[randomSolider];
      }
    }
  };

  this.armyAttack = function() {
    for (var i = 0; i < this.army.length; i++) {
      if (!this.dragon.isAlive()) {
        //this.dragon.isAlive() === false
        break;
      }

      if (this.army[i].isAlive()) {
        this.army[i].attackEnemy(this.dragon);
      }
    }
  };

  this.findWinner = function() {
    if (this.dragon.isAlive()) {
      console.log(
        "Dragon won with " + this.dragon.getHealth() + " health left"
      );
    } else {
      console.log(
        "The army won with " + this.findAliveSoldiers() + " soldier left"
      );
    }
  };

  this.findAliveSoldiers = function() {
    var counter = 0;
    for (var i = 0; i < this.army.length; i++) {
      if (this.army[i].isAlive()) {
        counter++;
      }
    }
    return counter;
  };

  this.isWarStillGoing = function() {
    return this.dragon.getHealth() > 0 && this.isArmyStillAlive();
  };

  this.isArmyStillAlive = function() {
    for (var i = 0; i < this.army.length; i++) {
      if (this.army[i].getHealth() > 0) {
        return true;
      }
    }

    return false;
  };

  this.populateArmy = function() {
    var numberOfSoliders = getRandomNumber(10, 15);

    for (var i = 0; i < numberOfSoliders; i++) {
      var typeOfSolider = getRandomNumber(1, 5);
      switch (typeOfSolider) {
        case 1:
          this.army.push(new Warrior(500, 60, "Warrior"));
          break;
        case 2:
          this.army.push(new Wizard(250, 100, "Wizard"));
          break;
        case 3:
          this.army.push(new Archer(200, 80, "Archer"));
          break;
        case 4:
          this.army.push(new Berserker(600, 300, "Berserker"));
          break;
          case 5:
            this.army.push(new Priest(1000, 200, "Priest"));
            break;  
        default:
          console.log("Error");
          break;
      }
    }
  };
}
