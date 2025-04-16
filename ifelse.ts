import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  standalone: true,
  template: `
    <button (click)="idade++">+</button>
    <button (click)="idade--">-</button>
    @if (idade >= 18) {
      <p>Acesso permitido</p>
    } @else {
      <p>Acesso negado</p>
    }
  `
})
export class AcessoComponent {
  idade = 0;
}