class Burung {
  bersuara() {
    console.log('Cuit Cuit...');
  }
}

class Ayam extends Burung {
  bersuara() {
    console.log('Kukuruyuk...');
  }
}

class Bebek extends Burung {
  bersuara() {
    console.log('Kwek Kwek...');
  }
}

const daftarBurung = [new Ayam(), new Bebek()];
daftarBurung.forEach((burung) => burung.bersuara());
