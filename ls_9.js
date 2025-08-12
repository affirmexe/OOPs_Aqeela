class Airplane {
  #altitude = 0;

  ascend(meters) {
    this.#altitude = Math.min(this.#altitude + meters, 12000);
    console.log(`Altitude: ${this.#altitude} meters`);
  }

  descend(meters) {
    this.#altitude = Math.max(this.#altitude - meters, 0);
    console.log(`Altitude: ${this.#altitude} meters`);
  }

  getAltitude() {
    return this.#altitude;
  }
}

class Jet extends Airplane {
  ascend(meters) {
    super.ascend(meters * 2);
  }
}

const plane = new Airplane();
plane.ascend(5000);
plane.descend(2000);

const jet = new Jet();
jet.ascend(3000);
console.log('Jet altitude:', jet.getAltitude());

jet.ascend(4000);
console.log('Jet altitude:', jet.getAltitude());
