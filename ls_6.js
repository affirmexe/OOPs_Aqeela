class Account {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposit berhasil. Saldo saat ini: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive.');
    } else if (amount > this.#balance) {
      console.log('Insufficient funds.');
    } else {
      this.#balance -= amount;
      console.log(`Withdrawal berhasil. Saldo saat ini: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends Account {
  withdraw(amount) {
    const currentBalance = this.getBalance();
    if (amount > currentBalance * 0.5) {
      console.log('Penarikan tidak bisa lebih dari 50% dari saldo saat ini.');
    } else {
      super.withdraw(amount);
    }
  }
}

const account = new Account();
account.deposit(1000);
account.withdraw(1200);
account.withdraw(500);

const savings = new SavingsAccount();
savings.deposit(1000);
savings.withdraw(600);
savings.withdraw(400);
