class Message {
  send() {
    console.log('Mengirim send pesan umum...');
  }
}

class SMS extends Message {
  send() {
    console.log('Mengirim send SMS to pengguna...');
  }
}
class Email extends Message {
  send() {
    console.log('Mengirim send email to pengguna...');
  }
}

const message = new Message();
const sms = new SMS();
const email = new Email();
message.send(); // Output: Mengirim send pesan umum...
sms.send(); // Output: Mengirim send SMS to pengguna...
email.send(); // Output: Mengirim send email to pengguna...
