import { Component } from '@angular/core';
import { Employees } from './employees/employeees';
import { EmployeeCreate, Employee } from './employee-create/employee-create';

@Component({
  selector: 'app-root',
  imports: [Employees, EmployeeCreate],
  template: `
    <app-employee-create
      (myEvent)="save($event)">
    </app-employee-create>

    <hr>

    <app-employees [employees]="employees"> </app-employees>
  `,
})
export class App {
  employee = new Employee();
  employees: Employee[] = [];

 save(event:any) {
  this.employee=event;
  this.employees.push({...event});
}
}