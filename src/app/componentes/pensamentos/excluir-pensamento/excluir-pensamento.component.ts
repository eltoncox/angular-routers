import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
      id: 0,
      conteudo: '',
      autoria: '',
      modelo: ''
  }

   constructor(
        private servive: PensamentoService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.servive.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
            this.pensamento = pensamento
        })
    }

    excluirPensamento() {
      if(this.pensamento.id){
          this.servive.excluir(this.pensamento.id).subscribe(() => {
              this.router.navigate(['/listarPensamento'])
          })
      }
    }

    cancelar() {
        this.router.navigate(['/listarPensamento'])
    }

}
