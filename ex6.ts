import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-pedido',
  standalone: true,
  imports: [FormsModule],
  template: `
    <select [(ngModel)]="status">
      <option value="pendente">Pendente</option>
      <option value="enviado">Enviado</option>
      <option value="entregue">Entregue</option>
    </select>
    @switch (status) {
      @case ('pendente') { <p>Aguardando confirmação</p> }
      @case ('enviado') { <p>Pedido a caminho</p> }
      @case ('entregue') { <p>Pedido entregue</p> }
      @default { <p>Status desconhecido</p> }
    }
  `
})
export class StatusPedidoComponent {
  status = 'pendente';
}