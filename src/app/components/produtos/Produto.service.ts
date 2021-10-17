import { Produto } from './Produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:8080/api/produtos"

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  create(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseUrl, produto)

  }
  read() :Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl) 
  }
}
