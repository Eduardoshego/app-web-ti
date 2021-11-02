
import { Cadastro } from '../model/Cadastro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

    apiURL: string = environment.apiBaseUrl + "/supervisores"

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient,
    
    ) { }
  
  

  showMessage(msg : string): void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition:'top'
    })
  }
  create( cadastro: Cadastro):Observable<Cadastro>{
    return this.http.post<Cadastro>(this.apiURL, cadastro)
  }

  read():Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.apiURL);
  }


}

