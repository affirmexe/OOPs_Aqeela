class Pegawai {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Pegawai {
  constructor(name, position, salary) {
    super(name);
    this.position = position;
    this.salary = salary;
  }

  work() {
    console.log(
      `${this.name} is bekerja as a ${this.position} dengan the salary of ${this.salary}.`
    );
  }
}

class Manager extends Pegawai {
  constructor(name, position, salary, department) {
    super(name);
    this.position = position;
    this.salary = salary;
    this.department = department;
  }

  lead() {
    console.log(
      `${this.name} is managing the ${this.department} department as sebagai ${this.position} with a gaji of ${this.salary}.`
    );
  }
}

const employee = new Employee('Alice', 'Software Engineer', 70000);
const manager = new Manager('Bob', 'Project Manager', 90000, 'Development');

employee.work();
manager.lead();

// Output:
// Alice is bekerja as a Software Engineer dengan the salary of 70000.
// Bob is managing the Development department as sebagai Project Manager with a gaji of 90000.
