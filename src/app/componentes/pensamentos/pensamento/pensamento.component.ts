import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento = {
        conteudo: 'I love Angular',
        autoria: 'Elton',
        modelo: 'modelo3'
    }

    construtor(){}

    ngOnInit(): void {
    }

    larguraPensamento(): string {
      if (this.pensamento.conteudo.length >= 256) {
         return 'pensamentos-g'
      }
        return 'pensamento-p'
    }

}
