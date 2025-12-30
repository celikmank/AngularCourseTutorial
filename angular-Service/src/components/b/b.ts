import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example } from '../../services/example';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {

  ex =inject(Example);

 
}
