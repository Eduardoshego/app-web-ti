import { SetorService } from './../../../services/Setor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto.model';
import { Setor } from 'src/app/model/Setores.model';

import { ProdutoService } from './../../../services/Produto.service';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-saida-create',
  templateUrl: './produto-saida-create.component.html',
  styleUrls: ['./produto-saida-create.component.css']
})
export class ProdutoSaidaCreateComponent implements OnInit {

  produto!: Produto;
  setores : Setor[] = [];
  setorControl = new FormControl('', Validators.required);

  constructor(
    private produtoService : ProdutoService,
    private setorService :SetorService,
     private route: ActivatedRoute,
      private router: Router
      ) { 
        
      }

  ngOnInit(): void {
    const id : string = this.route.snapshot.params.id;
    this.produtoService.readById(id)
    .subscribe(
      produto => {
        this.produto = produto
      }
    );
    this.setorService.read().subscribe(
      response => this.setores = response
    )
        
  }
  createdSaida(): void{

  }
  cancel():void{
    this.router.navigate(["/produtos"]);
  }

}
