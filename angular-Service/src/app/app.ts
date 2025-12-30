import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A } from '../components/a/a';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, A],
  template: `
    <app-a></app-a>
  `
})
export class App {
  protected readonly title = signal('angular-Service');
}
