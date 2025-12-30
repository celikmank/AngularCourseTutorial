import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Kredi Hesaplama</h1>

    <div>
      <label>Kredi Tutarı</label>
      <input type="number" [(ngModel)]="krediTutari" />
    </div>

    <div>
      <label>Taksit Sayısı</label>
      <select [(ngModel)]="taksitSayisi">
        @for (data of taksitler; track $index) {
          <option [value]="data">{{ data }}</option>
        }
      </select>
    </div>

    <button (click)="hesapla()">Hesapla</button>

   @if (sonuc) {
  <hr>

  <p>Aylık Taksit: {{ taksitTutari | number:'1.2-2' }} TL</p>
  <p>Toplam Geri Ödeme: {{ toplamGeriOdeme | number:'1.2-2' }} TL</p>

  <h3>Ödeme Planı</h3>

  <table border="1" cellpadding="5">
    <thead>
      <tr>
        <th>Taksit</th>
        <th>Taksit Tutarı (TL)</th>
        <th>Kalan Borç (TL)</th>
      </tr>
    </thead>
    <tbody>
      @for (item of odemePlani; track $index) {
        <tr>
          <td>{{ $index + 1 }}</td>
          <td>{{ item.taksitTutari | number:'1.2-2' }}</td>
          <td>{{ item.kalanGeriOdeme | number:'1.2-2' }}</td>
        </tr>
      }
    </tbody>
  </table>
}
  `
})
export class App {
  krediTutari = 0;
  taksitler = [3, 6, 9, 12, 24, 36];
  taksitSayisi = 3;

  odemePlani: { taksitTutari: number; kalanGeriOdeme: number }[] = [];
  taksitTutari = 0;
  toplamGeriOdeme = 0;
  sonuc = false;

hesapla() {
  if (this.krediTutari <= 0) return;

  const faizOrani = 0.29;

  this.toplamGeriOdeme = this.krediTutari * (1 + faizOrani);
  this.taksitTutari = this.toplamGeriOdeme / this.taksitSayisi;
  this.sonuc = true;

  this.odemePlani = [];

  let kalan = this.toplamGeriOdeme;

  for (let i = 1; i <= this.taksitSayisi; i++) {
    kalan -= this.taksitTutari;

    this.odemePlani.push({
      taksitTutari: this.taksitTutari,
      kalanGeriOdeme: kalan < 0 ? 0 : kalan
    });
  }
}
  }
