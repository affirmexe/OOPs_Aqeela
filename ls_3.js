class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

class Clothing extends Product {
  #size = '';
  constructor(name, price, size) {
    super(name, price);
    this.#size = size;
  }
  display() {
    console.log(`${this.name} costs $${this.price}, Size: ${this.#size}`);
  }
}

const pants = new Product('Jeans', 49.99);
pants.display();

const shirt = new Clothing('T-Shirt', 19.99, 'M');
shirt.display();
