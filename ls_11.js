class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  checkPassword(input) {
    if (input === this.#password) {
      console.log('Benar');
    } else {
      console.log('Salah');
    }
  }
}

const user1 = new User('secret123');
user1.checkPassword('secret123');
user1.checkPassword('wrongPass');
