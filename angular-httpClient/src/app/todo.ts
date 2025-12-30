import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>TODOS</h1>
    <ul>
      @for (val of todos; track val.id) {
        <li>{{ val.title }}</li>
      }
    </ul>
  `,
})
export class Todo implements OnInit {

  todos: any[] = [];
  readonly #http = inject(HttpClient);
  readonly #cdr = inject(ChangeDetectorRef); // Enjekte edin

  ngOnInit() {
    this.getTodos();
  }

  async getTodos() {
  try {
    const data = await lastValueFrom(
      this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
    );
    console.log('Gelen Veri:', data); // Verinin geldiğini buradan teyit edin
    this.todos = data;
    this.#cdr.detectChanges(); // Değişiklikleri algıla
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
}
}
