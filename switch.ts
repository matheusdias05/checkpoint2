import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="number" [(ngModel)]="numeroMes" min="1" max="12">
    @switch (numeroMes) {
      @case (1) { <p>Janeiro</p> }
      @case (2) { <p>Fevereiro</p> }
      @default { <p>Mês inválido</p> }
    }
  `
})
export class MesComponent {
  numeroMes = 1;
}