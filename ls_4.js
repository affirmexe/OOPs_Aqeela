class Ticket {
  constructor(event, price) {
    this.event = event;
    this.price = price;
  }
  printTicket() {
    if (this.price >= 100000) {
      console.log(`Ticket for ${this.event} is expensive at $${this.price}.`);
    } else {
      console.log(`Ticket for ${this.event} is affordable at $${this.price}.`);
    }
  }
}

class VIPTicket extends Ticket {
  constructor(event, price) {
    super(event, price);
    this.isVIP = true;
  }
  printTicket() {
    console.log(`VIP Ticket for ${this.event} costs $${this.price}`);
  }
}

const tiketBiasa = new Ticket('Konser A', 50000);
tiketBiasa.printTicket();

const tiketVIP = new VIPTicket('Konser B', 150000);
tiketVIP.printTicket();
