class Payment {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  process() {
    console.log(`Memproses pembayaran sebesar ${this.#amount}`);
  }
}

class CreditCardPayment extends Payment {
  process() {
    console.log(
      `Memproses pembayaran kartu kredit sebesar ${this.getAmount()}`
    );
  }
}

const payment = new Payment(500);
payment.process();

const creditPayment = new CreditCardPayment(500);
creditPayment.process();
