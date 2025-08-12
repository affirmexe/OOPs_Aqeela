class Animal {
  speak() {
    console.log('Hewan is bersuara...');
  }
}

class Cat extends Animal {
  Speak() {
    console.log('Meong...~');
  }
}

const c = new Cat();
c.speak(); // Output: Meong...~
