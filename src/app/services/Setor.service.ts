import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Setor } from '../model/Setores.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  apiUrl : string = environment.apiBaseUrl + "/setores"

  constructor(private http : HttpClient) { }

  read(): Observable<Setor[]>{

    return this.http.get<Setor[]>(this.apiUrl)
  }
  
}
