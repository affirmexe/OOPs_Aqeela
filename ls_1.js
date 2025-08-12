class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  info() {
    console.log(`${this.title} by ${this.author}`);
  }
}

class Ebook extends Book {
  #fileSize = 0;
  constructor(title, author, fileSize) {
    super(title, author);
    this.filesize = fileSize;
  }
  info() {
    console.log(
      `${this.title} by ${this.author}, File Size: ${this.filesize}MB`
    );
  }
}

const buku = new Book('3726 mdpl', 'Nurwina Sari');
buku.info();

const ebook = new Ebook('Seporsi Mi Ayam Sebelum Mati', 'Brian Khrisna', 30);
ebook.info();
