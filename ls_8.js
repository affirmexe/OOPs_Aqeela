class Employee {
  #workingHours = 0;

  logHours(hours) {
    if (hours > 0) {
      this.#workingHours += hours;
      console.log(`Total working hours: ${this.#workingHours}`);
    }
  }

  getWorkingHours() {
    return this.#workingHours;
  }
}

class RemoteEmployee extends Employee {
  logHours(hours) {
    if (hours > 8) {
      console.log('Exceeded daily work limit');
    } else {
      super.logHours(hours);
    }
  }
}

const emp = new Employee();
emp.logHours(5);
emp.logHours(4);

const remoteEmp = new RemoteEmployee();
remoteEmp.logHours(7);
remoteEmp.logHours(9);
