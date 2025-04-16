import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="number" [(ngModel)]="valor1">
    <input type="number" [(ngModel)]="valor2">
    <select [(ngModel)]="operacao">
      <option value="soma">+</option>
      <option value="subtracao">-</option>
      <option value="multiplicacao">×</option>
      <option value="divisao">÷</option>
    </select>

    @switch (operacao) {
      @case ('soma') { <p>Resultado: {{ valor1 + valor2 }}</p> }
      @case ('subtracao') { <p>Resultado: {{ valor1 - valor2 }}</p> }
      @case ('multiplicacao') { <p>Resultado: {{ valor1 * valor2 }}</p> }
      @case ('divisao') {
        @if (valor2 === 0) {
          <p class="erro">Erro: divisão por zero!</p>
        } @else {
          <p>Resultado: {{ valor1 / valor2 | number:'1.2-2' }}</p>
        }
      }
    }
  `,
  styles: [`.erro { color: red; }`]
})
export class CalculadoraComponent {
  valor1 = 0;
  valor2 = 0;
  operacao = 'soma';
}