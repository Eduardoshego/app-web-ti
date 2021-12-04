import { Observable } from 'rxjs';
import { Estabilizador } from './../model/Estabilizador.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstabilizadorService {

   apiurl:string = environment.apiBaseUrl + "/estabilizadores"

  constructor(private http:HttpClient) { }

  create(estabilizador:Estabilizador):Observable<Estabilizador>{
    return this.http.post<Estabilizador>(this.apiurl, estabilizador)
  }
  read():Observable<Estabilizador[]>{
    return this.http.get<Estabilizador[]>(this.apiurl)
  }
  readById(id:number):Observable<Estabilizador>{
    const url = `${this.apiurl}/+${id}`
    return this.http.get<Estabilizador>(url)
  }
  update(estab:Estabilizador):Observable<Estabilizador>{
    const url = `${this.apiurl}/+${estab.id}`
    return this.http.put<Estabilizador>(url, estab)
  }
  deleteById(id:number):void{
    const url = `${this.apiurl}/+${id}`
    this.http.delete(url)
  }
}
