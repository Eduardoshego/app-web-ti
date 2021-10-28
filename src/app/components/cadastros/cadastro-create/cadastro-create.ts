import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../Cadastro.service';
import { Cadastro } from '../Cadastro.model'
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    nome: "",
    numTelefone: "",
    email:""
  }

  constructor(private cadastroService: CadastroService, private router : Router) { }

  ngOnInit(): void {
  }
  create():void{
    this.cadastroService.create(this.cadastro).subscribe(()=>{
      this.cadastroService.showMessage("Cadastrado criado com sucesso!")
      this.router.navigate(['/cadastro'])
    })
  }
  cancel():void{
    this.router.navigate(['/cadastro'])
  }


}
