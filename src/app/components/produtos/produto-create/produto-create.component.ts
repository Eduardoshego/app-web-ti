import { Router } from '@angular/router';
import { ProdutoService } from '../../../Services/Produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../model/Produto.model';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto : Produto = {
    descricao : "",
    quantidade : 0
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router
    ) { }

  ngOnInit(): void {
   
  }
  createdProduto() : void{
    this.produtoService.create(this.produto)
    .subscribe(()=>{
      this.produtoService.showMessage("Salvo com sucesso")
      this.router.navigate(['/produtos'])
    })
      
    
  }
  navigateToProduto(): void{
    this.router.navigate(['/produtos'])
    console.log("navigate")
  }

}
