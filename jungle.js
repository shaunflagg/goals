/*

Create the objects that you feel would best model a jungle (using  OO design and coding practices or functional design and coding practices) based on the following requirements, using Javascript as the language of choice.


1. The jungle contains several species of animals; tigers, monkeys and snakes.

2. All animals can do three things, make a sound, eat food, and sleep.

3. Each species of animal knows how many others of its kind exist.

4. By default when an animal’s energy level changes, it changes in the following ways:

  a. -3 for making a sound

b. +5 for eating food

c. +10 for sleeping


  6. Tigers get +5 energy for sleeping.

  7. Monkeys get +2 energy for eating and -4 energy for making a sound.

8. Some animals have the ability to play.

9. Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy. If a monkey doesn't have enough energy to play they say "Monkey is too tired".

10. The jungle contains several types of food; meat, fish, bugs and grain.
*/

var jungleAnimal = function (species, energy) {

  this.species = species;
  this.energy = energy;

  if (species === 'monkey' && this.energy > 8) {
    this.play = function (play) {
      this.energy -= 8;
      console.log ("The " + species + " goes Oooh oooh oooh")
    }
  }
  else if (species === 'monkey' && this.energy < 8) {
    this.play = function (play) {
      console.log("The " + species + " is too tired to play.")
    }
    }


  else {
      console.log("The " + species + " doesn't play.");
    }


  this.speak = function(sound, speak){
    if (speak == true && species !== 'monkey') {
      this.energy -= 3;
      console.log("The " + species + " " + sound + ".")
    }
    else if (speak == true && species === 'monkey') {
      this.energy -= 4;
    }
    else{
      console.log("The animal is silent.");
    }
  };
  this.eat = function(jungleFoods, eats){
    if (eats == true && species !== 'monkey') {
      this.energy += 5;
      console.log("Nom nom. Yummy " + jungleFoods + ".");
    }

    else if (eats == true && species === 'monkey'){
      this.energy += 2;

    }
    else {
      console.log("The " + species + " is not hungry.");
    }

  };
  this.sleep = function(sleep){
    if (sleep == true && species !== 'tiger') {
      this.energy += 10;
      console.log("Beddy bye.");
    }
    else if (sleep == true && species === 'tiger') {
      this.energy += 15;
    }
    else {
      console.log("The " + species + " is not tired.");
    }
  }

};

var jungleFoods = ["meat", "fish", "bugs", "grain"];

var tiger = new jungleAnimal ('tiger', 100);
tiger.speak('roars', true);
tiger.eat(jungleFoods[0], true);
tiger.sleep(true);

var monkey = new jungleAnimal ('monkey', 100);
monkey.speak('oooh aaah oooh', true);
monkey.eat(jungleFoods[2], true);
monkey.sleep(true);
monkey.play();

var snake = new jungleAnimal ('snake', 100);
snake.speak('Ssssssss', true);
snake.eat(jungleFoods[2], true);
snake.sleep(true);

console.log(tiger);
console.log(monkey);
console.log(snake);
