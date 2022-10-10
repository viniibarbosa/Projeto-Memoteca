import { EditarPensamentosComponent } from './components/pensamentos/editar-pensamentos/editar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
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
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
