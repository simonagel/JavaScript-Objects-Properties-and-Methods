function Dragon (health, attack, name){
    Combatant.call(this, health, attack, name);

    this.specAttack = function(army) {
        for (var i = 0; i < army.lenght; i++) {
            if (army[i].isAlive()) {
                army[i].health -= 100;
            }    
        }
        console.log("Spec attack");
    }
};

Dragon.prototype = new Combatant();