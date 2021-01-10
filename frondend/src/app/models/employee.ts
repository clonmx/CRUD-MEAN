export class Employee {

    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;

    constructor (name= '', position='', office='', salary=0 ) {
        this.name= name;
        this.position= position;
        this.office=office;
        this.salary=salary;
    }

}
