import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
   <h1>Todo App</h1>

<div>
  <label>Work</label>
  <input [(ngModel)]="work" />
  <button (click)="save()">Save</button>
</div>

<hr>

@if (isUpdateWorkFormActive) {
  <div>
    <label>Update</label>
    <input [(ngModel)]="updateWork" />
    <button (click)="update()">Update</button>
    <button (click)="cancel()">Cancel</button>
  </div>
}

<ul>
  @for (data of todos; track $index) {
    <li>
      {{ data }}
      <button (click)="get($index)">Update</button>
      <button (click)="delete($index)">Delete</button>
    </li>
  }
</ul>
    `

})
export class App {
  work = '';
  todos: string[] = [];

  updateWork = '';
  updateIndex: number | null = null;
  isUpdateWorkFormActive = false;

  save() {
    if (!this.work.trim()) return;
    this.todos.push(this.work);
    this.work = '';
  }

  delete(index: number) {
    this.todos.splice(index, 1);
    if (this.updateIndex === index) {
      this.cancel();
    }
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index];
    this.isUpdateWorkFormActive = true;
  }

  update() {
    if (this.updateIndex === null) return;
    if (!this.updateWork.trim()) return;

    this.todos[this.updateIndex] = this.updateWork;
    this.cancel();
  }

  cancel() {
    this.updateIndex = null;
    this.updateWork = '';
    this.isUpdateWorkFormActive = false;
  }
}
