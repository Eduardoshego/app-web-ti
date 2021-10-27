import { Produto } from './../Produto.model';
import { ProdutoService } from './../Produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos!: Produto[]
  displayedColumns = ['id','descricao','quantidade','action']


  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }


}
