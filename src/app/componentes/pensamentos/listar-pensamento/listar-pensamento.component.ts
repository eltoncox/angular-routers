import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent  implements OnInit {

  listaPensamentos = [
      {
        conteudo: 'Passo informações para o componente filho',
        autoria: 'Componente pai',
        modelo: 'modelo3'
      },
      {
        conteudo: 'Minha propriedade e decorado com @Input',
        autoria: 'Componente filho',
        modelo: 'modelo3'
      },
      {
        conteudo: 'Não se tem uma revolução quando se ama o inimigo; não se tem uma revolução quando se está implorando ao sistema de exploração para que ele te integre. Revoluções derrubam sistemas, revoluções destroem sistemas, Eu não chamo de violência quando é em autodefesa, eu chamo de inteligência.',
        autoria: 'Malcolm X',
        modelo: 'modelo1'
      }

  ];

  construtor(){}

  ngOnInit(): void {

  }

}
