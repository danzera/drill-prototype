// write a Constructor for Animal Objects
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}

// create a new Animal Object for 'ANIMALLLL' from the Muppets
var animal = new Animal("ANIMALLLL", 2);
console.log(animal); // log out the Animal Object after creation
Animal.prototype.sayName = function() { // add sayName() method to Animal's prototype
  console.log("Hi, my name is " + this.name);
};
console.log(animal); // loug out our Animal Object after creating the sayName() method
animal.sayName(); // have our Animal Object say his name
animal.job = 'drummer'; // assign a 'job' property for animal
console.log("I am a " + animal.job); // log out his job that we just assigned (drummer)
console.log(animal); // log out our Animal Object after adding a 'job' property

// create another new Animal Object for 'Miss Piggy'
var piggy = new Animal("Miss Piggy", 2);
console.log(piggy); // log out "Miss Piggy" after creation
piggy.sayName(); // see if Miss Piggy knows how to say her name (thanks to the prototype)
console.log(piggy.name + "'s job is " + piggy.job); // see if she has a job (she should not since one wasn't added yet to her Animal Object)

// ---------------------------------------
// write a Constructor for Penguin Objects
function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}
// have the Penguin Object inherit from Animal
Penguin.prototype = new Animal();
// create a new Penguin Object
var happy = new Penguin("Happy");
console.log(happy); // log out our Penguin Object
happy.sayName(); // should inherit the sayName() method from Animal

// ------------------------
// create an Emperor Object
function Emperor(name) {
  this.name = name;
}
// have the Emperor Object inherit from Penguin
Emperor.prototype = new Penguin();
// create a new Emperor Object
var palpatine = new Emperor('Palpatine');
console.log(palpatine); // log out our Emperor Object
palpatine.sayName(); // should be able to say his name, again, thanks to prototyping
console.log("I have " + palpatine.numLegs + " legs."); // should also have 2 legs thanks to prototyping
