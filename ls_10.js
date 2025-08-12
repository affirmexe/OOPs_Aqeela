class ParkingSpot {
  #isOccupied = false;

  occupy() {
    if (!this.#isOccupied) {
      this.#isOccupied = true;
      console.log('Parking spot is now occupied.');
    } else {
      console.log('Parking spot is already occupied.');
    }
  }

  vacate() {
    if (this.#isOccupied) {
      this.#isOccupied = false;
      console.log('Parking spot is now free.');
    } else {
      console.log('Parking spot is already free.');
    }
  }

  getStatus() {
    return this.#isOccupied;
  }
}

class ElectricParkingSpot extends ParkingSpot {
  occupy(car) {
    if (!car.isElectric) {
      console.log('Only electric cars allowed');
    } else {
      super.occupy();
    }
  }
}

const regularSpot = new ParkingSpot();
regularSpot.occupy();
regularSpot.vacate();

const electricSpot = new ElectricParkingSpot();
electricSpot.occupy({ isElectric: false });
electricSpot.occupy({ isElectric: true });
