import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Setor } from 'src/app/model/Setores.model';
import { SetorService} from '../../../services/Setor.service'
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';


@Component({
  selector: 'app-setores-read',
  templateUrl: './setores-read.component.html',
  styleUrls: ['./setores-read.component.css']
})
export class SetoresReadComponent implements OnInit {

  setores$: Observable<Setor[]>
  displayedColumns = ['setor','telefone','ramal','action']

  constructor(
    private setor:SetorService,
    private dialog: MatDialog
  
    ) 
  
  { 
    this.setores$ = this.setor.read()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar a lista de setores!')
        return of ([])
      })
    )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(  ): void {


  }

}
