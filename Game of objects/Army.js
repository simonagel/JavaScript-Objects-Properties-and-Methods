function Wizard(health, attack, name){
    Combatant.call(this, health, attack, name);
}

Wizard.prototype = new Combatant();

function Warrior(health, attack, name){
    Combatant.call(this, health, attack, name);
}

Warrior.prototype = new Combatant();

function Archer (health, attack, name){
    Combatant.call(this, health, attack, name)
}

Archer.prototype = new Combatant();

function Berserker (health, attack, name){
    Combatant.call(this, health, attack, name)
}

Berserker.prototype = new Combatant();

function Priest (health, attack, name){
    Combatant.call(this, health, attack, name)
}

Priest.prototype = new Combatant();