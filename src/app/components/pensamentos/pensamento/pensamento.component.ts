import { Pensamento } from './../pensamento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input()  pensamento: Pensamento = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }
  constructor() { }

  ngOnInit(): void {
  }
  larguraConteudo():string{
    if(this.pensamento.conteudo.length > 256){
      return "pensamento-g"
    }
    return "pensamento-p"
  }

}
