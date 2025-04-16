import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  template: `
    <div>
      @for (tarefa of tarefas; track $index) {
        <div>
          {{ tarefa }}
          <button (click)="remover($index)">×</button>
        </div>
      } @empty {
        <p>Nenhuma tarefa pendente</p>
      }
    </div>
  `
})
export class TarefasComponent {
  tarefas = ["Estudar Angular", "Fazer exercícios", "Revisar código"];
  
  remover(index: number) {
    this.tarefas.splice(index, 1);
  }
}