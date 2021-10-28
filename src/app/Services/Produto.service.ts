import { Produto } from '../model/Produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl: string = environment.apiBaseUrl + "/produtos"

  constructor(private snackBar:MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  create(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(this.apiUrl, produto)

  }
  read() :Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl) 
  }
  readById(id:string): Observable<Produto>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Produto>(url)
  }
  update(produto:Produto):Observable<Produto>{
    const url = `${this.apiUrl}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }
  deleteById( id:string ) :Observable<Produto>{
     const url = `${this.apiUrl}/${id}`
     return this.http.delete<Produto>(url)
  }
  
}

