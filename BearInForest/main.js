function main() {
  var forest = new Forest("Forest");
  forest.populateAnimals();

  for (var i = 1; i <= 30; i++) {
    console.log("Day : " + i);
    forest.spendDay();
  }

  console.log(forest);
}

main();
