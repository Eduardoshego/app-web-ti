import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computador } from '../model/Computador.model';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  apiUrl:string = environment.apiBaseUrl + "/computadores"

  constructor(private http:HttpClient) { }

  read():Observable<Computador[]>{
    return this.http.get<Computador[]>(this.apiUrl) 
  }
  create(comp:Computador):Observable<Computador>{
    return this.http.post<Computador>(this.apiUrl,comp)
  }
  readById(id:number):Observable<Computador>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Computador>(url)
  }
  delete(id:number):Observable<Computador>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Computador>(url)
  }

}
