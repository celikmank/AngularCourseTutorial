import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo-pipe';
import { NamePipe } from "./name-pipe";


@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoPipe, NamePipe],
  template: `
  <h1>Pipe</h1>
  <div>
    <input  [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <h1>{{name | name}}</h1>
  <div>
    <input [(ngModel)]="search" placeholder="Search todos">
    <ul>
      @for (t of todos | todo:search; track $index) {
      <li>{{t}}</li>
      }
    </ul>
  </div>
  `,
})
export class App {
  name = 'angular-pipe';
  work:string='';
  todos:string[] = ["domates", "biber", "patlıcan"];
  search:string='';

 save() {
  if (!this.work.trim()) return;
  this.todos.push(this.work.trim());
  this.work = '';
}
 
}
