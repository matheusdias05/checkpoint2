import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="email" [(ngModel)]="email" placeholder="Email">
    <input type="password" [(ngModel)]="senha" placeholder="Senha">
    
    @if (email === '' || senha === '') {
      <p class="erro">Campos obrigatórios!</p>
    } @else if (!email.includes('@') || senha.length < 6) {
      <p class="erro">Credenciais inválidas!</p>
    } @else {
      <p class="sucesso">Login bem-sucedido!</p>
    }
  `,
  styles: [`
    .erro { color: red; }
    .sucesso { color: green; }
  `]
})
export class LoginComponent {
  email = '';
  senha = '';
}