class Department {
    name: string
    employees: string[] = []

    constructor(n: string) {
        this.name = n 
    }
    describe() {
        console.log('Department: ' + this.name)
    }

    addEmployee() {
        console.log('adding an employee')
    }
}

let dev = new Department('Dev team')
// console.log('1st:',dev);
dev.describe()
let devCopy = {dev: dev.describe}
devCopy.dev()
// console.log('line 2:', JSON.stringify(dev.describe));