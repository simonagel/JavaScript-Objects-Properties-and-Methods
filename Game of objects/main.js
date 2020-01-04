function main(){

    var war = new War("Red Wedding");
    war.populateArmy();

    var isWarRaging = true;

    while(isWarRaging){
        war.fight(); // every member of the army attacks the dragon and the dragon attacks one solider
        isWarRaging = war.isWarStillGoing();
    }
    war.findWinner();
    console.log(war);
}

main();
