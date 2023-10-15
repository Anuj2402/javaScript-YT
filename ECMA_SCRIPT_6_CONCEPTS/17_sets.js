const exampleSet = new Set([1,1,1,1,2,2,2,2]);

console.log(exampleSet); // output->set(2) {1,2}
console.log(exampleSet.size); //output -> 2
exampleSet.add(5)
console.log(exampleSet.size); //output -> 3
exampleSet.add(5).add(11)
console.log(exampleSet); // output-> set(4) {1,2,5,11}
console.log(exampleSet.size); //output -> 4

console.log(exampleSet.delete(5)); //it return boolean value // true as 5 is present in the set
console.log(exampleSet);
console.log(exampleSet.has(11)); // output -> true

exampleSet.clear();
console.log(exampleSet);  // {} 0