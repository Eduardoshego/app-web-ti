import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../Cadastro.service'
import { Cadastro } from '../Cadastro.model';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {
  msg: string = environment.apiBaseUrl
  cadastro!:Cadastro[];
  displayedColumns = ['nome','email','numTelefone','action']

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastro =>{
      this.cadastro = cadastro
    })
  }

}
