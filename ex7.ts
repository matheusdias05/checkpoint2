import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  template: `
    <div>
      @for (usuario of usuarios; track usuario.nome) {
        <p>Nome: {{ usuario.nome }}, Idade: {{ usuario.idade }}</p>
      } @empty {
        <p>Nenhum usuário cadastrado</p>
      }
    </div>
  `
})
export class UsuariosComponent {
  usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 30 }
  ];
}