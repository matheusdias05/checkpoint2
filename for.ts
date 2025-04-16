import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  standalone: true,
  template: `
    <ul>
      @for (item of itens; track $index) {
        <li>{{ item }}</li>
      } @empty {
        <li>Nenhum item na lista</li>
      }
    </ul>
  `
})
export class ListaComprasComponent {
  itens = ["Maçã", "Banana", "Leite"];
}