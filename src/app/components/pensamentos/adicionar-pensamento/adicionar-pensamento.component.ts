import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pensamento',
  templateUrl: './adicionar-pensamento.component.html',
  styleUrls: ['./adicionar-pensamento.component.css']
})
export class AdicionarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  cancelarPensamento(){
    alert("Pensamento cancelado");
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe()
    this.router.navigate(['/listarPensamento'])
  }

  constructor(private service:PensamentoService, private router:Router ) { }

  ngOnInit(): void {
  }

}
