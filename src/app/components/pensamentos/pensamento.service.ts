import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly Api = 'http://localhost:3000/pensamento'

  constructor(private http: HttpClient) { }

  listar():Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.Api)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.Api, pensamento)
  }
}
