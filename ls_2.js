class HotelRoom {
  #isBooked = false;

  bookRoom() {
    this.#isBooked = true;
  }

  checkStatus() {
    console.log(this.#isBooked ? 'Kamar sudah dipesan' : 'Kamar tersedia');
  }
}

const room = new HotelRoom();
room.checkStatus();
room.bookRoom();
room.checkStatus();
