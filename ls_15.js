class Account {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  showBalance() {
    console.log(`Saldo anda adalah: ${this.#balance}`);
  }
}

class PremiumAccount extends Account {
  showBalance() {
    console.log(`Saldo anda adalah: ${this.getBalance()} (Akun Premium)`);
  }
}

const regularAccount = new Account();
regularAccount.showBalance();

const premiumAccount = new PremiumAccount();
premiumAccount.showBalance();
