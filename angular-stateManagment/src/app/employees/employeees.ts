import { Component, Input } from '@angular/core';
import { Employee } from '../employee-create/employee-create';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.html',
})
export class Employees {
  @Input() employees: Employee[] = [];
}
