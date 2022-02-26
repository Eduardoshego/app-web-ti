import { Produto } from '../../../model/Produto.model';
import { ProdutoService } from '../../../services/Produto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos$: Observable<Produto[]>
  displayedColumns = ['descricao','quantidade','action']


  constructor(private produtoService : ProdutoService) { 

    this.produtos$ = this.produtoService.read();
  }

  ngOnInit(): void {
    
  }


}
