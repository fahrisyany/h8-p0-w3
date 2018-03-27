
function groupAnimals(animals) {
  animals.sort()
  var arr1 = []
  var arr2 = []
  var firstAnimal = animals[0][0]
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === firstAnimal) {
      arr2.push(animals[i])
    } else {
      arr1.push(arr2)
      arr2 = []
      firstAnimal = animals[i][0]
      arr2.push(animals[i])
    }
    if (i === animals.length - 1) {
      arr1.push(arr2)

    }
  }
  //console.log(arr1)
  return arr1

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
