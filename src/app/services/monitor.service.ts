import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monitor } from '../model/Monitor.model';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  apiUrl: string = environment.apiBaseUrl + "/monitores"

  constructor(private http:HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg:string): void{
    this.snackBar.open(msg, 'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'

    })
  }
  create(monitor:Monitor):Observable<Monitor>{
    return this.http.post<Monitor>(this.apiUrl,monitor)
  }
  read():Observable<Monitor[]>{
    return this.http.get<Monitor[]>(this.apiUrl)
  }
  readById(id:number):Observable<Monitor>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Monitor>(url);
  }
  update(monitor:Monitor):void{
    const url = `${this.apiUrl}/${monitor.id}`;
    this.http.put<Monitor>(url,monitor);
  }
  deleteById(id:number):void{
    const url = `${this.apiUrl}/${id}`;
    this.http.delete(url);
  }
}
