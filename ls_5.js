class Animal {
  #energy = 0; // batas 0-100

  getEnergy() {
    return this.#energy;
  }

  eat(amount) {
    this.#energy = Math.min(this.#energy + amount, 100);
    console.log(`Energi hewan bertambah: ${this.#energy}`);
  }

  sleep(time) {
    const energyGained = time * 2;
    this.#energy = Math.min(this.#energy + energyGained, 100);
    console.log(`Energi hewan bertambah setelah tidur: ${this.#energy}`);
  }
}

class Dog extends Animal {
  eat(amount) {
    const boostedAmount = Math.floor(amount * 1.5);
    super.eat(boostedAmount);
  }
}

const dog = new Dog();

console.log('Sebelum makan, energi:', dog.getEnergy());
dog.eat(20);
console.log('Setelah makan, energi:', dog.getEnergy());

dog.sleep(5);
console.log('Setelah tidur, energi:', dog.getEnergy());
