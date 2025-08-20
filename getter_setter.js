class Mahasiswa {
  #nama;

  constructor(nama) {
    this.#nama = nama;
  }

  get nama() {
    return this.#nama.toUpperCase();
  }

  set nama(value) {
    if (value.length < 3) {
      throw new Error(
        'Nama terlalu pendek! Nama harus terdiri dari minimal 3 karakter'
      );
    }
    this.#nama = value;
  }
}

const mhs = new Mahasiswa('Ari Budi');

console.log(mhs.nama);

mhs.nama = 'Li';
mhs.nama = 'Putria';
console.log(mhs.nama);
