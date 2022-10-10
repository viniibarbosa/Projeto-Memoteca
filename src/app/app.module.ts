import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MuralPensamentosComponent } from './components/pensamentos/mural-pensamentos/mural-pensamentos.component';
import { AdicionarPensamentoComponent } from './components/pensamentos/adicionar-pensamento/adicionar-pensamento.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { PensamentoComponent } from './components/pensamentos/pensamento/pensamento.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MuralPensamentosComponent,
    AdicionarPensamentoComponent,
    RodapeComponent,
    PensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
