import { ProdutoService } from '../../../services/Produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../model/Produto.model';


@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto !: Produto;


  constructor(
    private produtoService:ProdutoService,
    private router :Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id :string = this.route.snapshot.params.id
    this.produtoService.readById(id).subscribe(produto =>{
      this.produto = produto
    })
  }
  delete():void{
    this.produtoService.deleteById(`${this.produto.id}`).subscribe(()=>{
      this.produtoService.showMessage("Produto excluido com sucesso!")
      this.router.navigate(["/produtos"])
    })
  }
  cancel():void{
    this.router.navigate(["/produtos"]);
  }

}
