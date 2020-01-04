function Combatant(health, attack, name) {
  this.health = health;
  this.attack = attack;
  this.name = name;

  this.attackEnemy = function(enemy) {
    console.log(
      "Enemy with name: " +
        enemy.getName() +
        " is attacked by " +
        this.name +
        " for " +
        this.attack
    );
    enemy.setHealth(enemy.getHealth() - this.attack);
    console.log("Enemy has : " + enemy.getHealth() + " left");
  };

  this.getName = function() {
    return this.name;
  };

  this.getHealth = function() {
    return this.health;
  };

  this.setHealth = function(health) {
    this.health = health;
  };

  this.getAttack = function() {
    return this.attack;
  };

  this.isAlive = function() {
    return this.health > 0;
  };
}
