import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  standalone: true,
  template: `
    <div>
      @for (produto of produtos; track produto.nome) {
        <p [class.promocao]="produto.promocao">
          {{ produto.nome }} - R$ {{ produto.preco }}
        </p>
      } @empty {
        <p>Nenhum produto cadastrado</p>
      }
    </div>
  `,
  styles: [`
    .promocao { color: red; }
  `]
})
export class ProdutosComponent {
  produtos = [
    { nome: "Notebook", preco: 3000, promocao: true },
    { nome: "Mouse", preco: 50, promocao: false }
  ];
}