import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


export class Employee {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';

}

@Component({
  selector: 'app-employee-create',
  imports: [FormsModule],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
})
export class EmployeeCreate {

  employee: Employee = new Employee();

  @Output() myEvent = new EventEmitter<Employee>();

  save() {
    console.log('Employee Saved', this.employee);
    this.myEvent.emit(this.employee)
    this.employee = new Employee();
  }

} 
