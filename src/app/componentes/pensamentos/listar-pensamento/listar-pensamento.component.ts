import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent  implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  constructor(private service: PensamentoService) { }

  ngOnInit(): void { // assim que um componente for carregado, ele já vai ser carregado no ngOnInit
       this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
          this.listaPensamentos = listaPensamentos
       } )
  }

}
