import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural-pensamentos',
  templateUrl: './mural-pensamentos.component.html',
  styleUrls: ['./mural-pensamentos.component.css']
})
export class MuralPensamentosComponent implements OnInit {
  listaDePensamentos : Pensamento[] = []



  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
      this.service.listar().subscribe(
        (listaDePensamentos)=>{
          this.listaDePensamentos = listaDePensamentos
        }

      )
  }
}
