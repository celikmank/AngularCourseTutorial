import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Döngüler</h1> 

    <ul>
      @for (data of todos; track $index) {
        <li>
          {{ $index }}
          || İlk kayıt mı?: {{ $first }}
          || Son kayıt mı?: {{ $last }}
          || Veri: {{ data.work }}
        </li>
      }
    </ul>
    <hr>
<h1>Şart blokları</h1>
@if (showFirstText) {
<p style="color: red;">Birinci yazı</p>
}
@if (showSecondText) {
<p style="color: blue;">İkinci yazı</p>
}
<hr>
<button (click)="show(1)">Birinci yazıyı göster</button>
<button (click)="show(2)">İkinci yazıyı göster</button>
  `
})
export class App {
  todos: TodoModel[] = [
    { work: 'Alışverişe git', isCompleted: false },
    { work: 'Faturaları öde', isCompleted: false },
    { work: 'Ders çalış', isCompleted: false },
    { work: 'Egzersiz yap', isCompleted: false }
  ];

  // Sadece döngü örnekleri için
  save() {
    // Basit for
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    console.log('--- listeyi for ile dönme ---');
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work);
    }

    console.log('--- listeyi forEach ile dönme ---');
    this.todos.forEach(item => {
      console.log(item.work, item.isCompleted);
    });
  }

  showFirstText: boolean = false;
  showSecondText: boolean = false;

show(num: number) {
  if (num === 1) {
    this.showFirstText = true;
    this.showSecondText = false;
  } else if (num === 2) {
    this.showSecondText = true;
    this.showFirstText = false;
  }

}

}

export class TodoModel {
  work = '';
  isCompleted = false;
}
