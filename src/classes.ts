class Department {
    // public name: string
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n 
    }
    describe(this: Department) {
        console.log('Department: (' + this.id + ') ' + this.name)
    }

    addEmloyee(employee: string) {
        this.employees.push(employee)
    }

    printEmployees() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
      
}
class ITDepartment extends Department {
    adminList: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.adminList = admins
    }
}
class AccountingDeparment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'ACC')
    }

    addReport(text: string) {
        this.reports.push(text)
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDeparment('d2', [])
accounting.addReport('this is report')
accounting.printReports()
const it = new ITDepartment('d1',['Justin'])
// accounting.addEmloyee('Justin')
// accounting.addEmloyee('Javohir')
// accounting.printEmployees()
// it.describe();
// console.log(it);