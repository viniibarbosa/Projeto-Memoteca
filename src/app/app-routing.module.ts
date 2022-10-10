import { MuralPensamentosComponent } from './components/pensamentos/mural-pensamentos/mural-pensamentos.component';
import { AdicionarPensamentoComponent } from './components/pensamentos/adicionar-pensamento/adicionar-pensamento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adicionarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'adicionarPensamento',
    component: AdicionarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: MuralPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
