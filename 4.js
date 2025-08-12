class User {
  #password = 'AqeelaABC';

  checkPassword(input) {
    if (input === this.#password) {
      console.log('Benar');
    } else {
      console.log('Salah');
    }
  }
}

const user = new User();
user.checkPassword('AqeelaABC'); // Output: Benar
user.checkPassword('AqeelaBC'); // Output: Salah
    