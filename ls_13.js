class Order {
  #status = 'Pending';

  get status() {
    return this.#status;
  }

  set status(newStatus) {
    const validStatuses = ['Pending', 'Confirmed', 'Delivered', 'Cancelled'];
    if (validStatuses.includes(newStatus)) {
      this.#status = newStatus;
    } else {
      console.log('Invalid status value. Status change rejected.');
    }
  }
}

const order = new Order();
console.log('Initial status:', order.status);

order.status = 'Confirmed';
console.log('Updated status:', order.status);

order.status = 'InvalidStatus';
console.log('Final status:', order.status);
