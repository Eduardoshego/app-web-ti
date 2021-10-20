import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../Produto.service';
import { Component, OnInit } from '@angular/core';
import {Produto} from '../Produto.model'

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  produto!: Produto

  constructor(
    private produtoService:ProdutoService, 
    private router: Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id
    this.produtoService.readById(id).subscribe(produto =>{
      this.produto = produto
    });
  }
  produtoUpdate() :void {
    this.produtoService.update(this.produto).subscribe(()=>{
      this.produtoService.showMessage('Produto atualizado!');
      this.router.navigate(['/produtos'])
    }

    )
  }
  cancel() :void{
    this.router.navigate(['/produtos'])
  }

}
