class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} si ${this.breed} is sedang barking.`);
  }
}

class Bird extends Animal {
  constructor(name, species) {
    super(name);
    this.species = species;
  }

  fly() {
    console.log(`${this.name} si burung ${this.species} is sedang flying.`);
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
const bird = new Bird('Tweety', 'Canary');

dog.bark();
bird.fly();

// Output:
// Buddy si Golden Retriever is sedang barking.
// Tweety si burung Canary is sedang flying.
