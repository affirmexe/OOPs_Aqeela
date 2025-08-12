class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is sedang makan.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log(`${this.name} si ${this.color} is mengoeng.`);
  }
}

const kucing = new Cat('Tommy', 'putih');
kucing.eat();
kucing.meow();
