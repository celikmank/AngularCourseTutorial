import { Component } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo], // BU YOKSA <app-todo> ÇALIŞMAZ
  template: `
    <h1>Angular HttpClient Example</h1>
    <app-todo></app-todo>
  `,
})
export class App {}
