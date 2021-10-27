import { Supervisor } from './Supervisor.mode';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  baseUrl = "http://localhost:8080/api/supervisores"

  showMessage(msg : string): void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition:'top'
    })
  }
  create( supervisor: Supervisor):Observable<Supervisor>{
    return this.http.post<Supervisor>(this.baseUrl, supervisor)
  }

  read():Observable<Supervisor[]>{
    return this.http.get<Supervisor[]>(this.baseUrl);
  }

}

