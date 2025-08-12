// 1. Konvensi (PSEUDO-ENCAPSULATION)
class BankAccount {
  constructor() {
    this._balance = 0;
  }

  deposit(amount) {
    this._balance += amount;
  }
  showBalance() {
    console.log('Current balance saat ini is: ' + this._balance);
  }
}

const akun = new BankAccount();
akun.deposit(500000);
akun.showBalance(); // Output: Current balance is: 500000

akun._balance = 1000000; // Attempt to modify the private property
akun.showBalance(); // Output: Current balance is: 500000 (still the original value)

// 2. Encapsulation Asli (PRIVATE FIELD)
class SecureAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  showBalance() {
    console.log(`Current balance aman is: ${this.#balance}`);
  }
}

const akun = new SecureAccount();
akun.deposit(500);
// akun.#balance = 9999; Attempt to modify the private property, this will throw an error
akun.showBalance(); // Output: Current balance aman is: 500 (still the original value, cannot modify directly)
