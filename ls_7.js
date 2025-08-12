class Vehicle {
    #speed = 0;

    accelerate(amount) {
        if (amount < 0) return;
        this.#speed = Math.min(this.#speed + amount, 180);
    }

    brake(amount) {
        if (amount < 0) return;
        this.#speed = Math.max(this.#speed - amount, 0);
    }

    getSpeed() {
        return this.#speed;
    }
}

class Car extends Vehicle {
    accelerate(amount) {
        console.log("Car accelerating");
        super.accelerate(amount);
    }
}

const myCar = new Car();
myCar.accelerate(50);
console.log("Kecepatan:", myCar.getSpeed());

myCar.accelerate(200);
console.log("Kecepatan:", myCar.getSpeed());

myCar.brake(100);
console.log("Kecepatan setelah pengereman:", myCar.getSpeed());