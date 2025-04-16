import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valor',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="valor" placeholder="Digite 1 ou 'dois'">
    @switch (valor) {
      @case (1) { <p>Um</p> }
      @case ('dois') { <p>Dois</p> }
      @default { <p>Valor não reconhecido</p> }
    }
  `
})
export class ValorComponent {
  valor: number | string = 1;
}