import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Produto } from '../../../model/Produto.model';
import { ProdutoService } from '../../../services/Produto.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErroDialogComponent } from 'src/app/shared/components/erro-dialog/erro-dialog.component';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos$: Observable<Produto[]>
  displayedColumns = ['descricao','quantidade','action']


  constructor(
    private produtoService : ProdutoService,
    private dialog : MatDialog
    ) { 

    this.produtos$ = this.produtoService.read()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar a lista de produtos!')
        return of ([])
        
      })
    )
  }

  ngOnInit(): void {
    
  }
  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg
    });
  }
}



