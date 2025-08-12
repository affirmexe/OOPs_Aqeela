class Vehicle {
  move() {
    console.log('Kendaraan bergerak');
  }
}

class Car extends Vehicle {
  move() {
    console.log('Mobil berjalan di jalan raya');
  }
}

class Boat extends Vehicle {
  move() {
    console.log('Perahu berlayar di laut');
  }
}

const genericVehicle = new Vehicle();
genericVehicle.move();

const myCar = new Car();
myCar.move();

const myBoat = new Boat();
myBoat.move();
