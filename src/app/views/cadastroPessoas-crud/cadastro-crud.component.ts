import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.css']
})
export class CadastroCrudComponent implements OnInit {

  constructor(private router: Router, private header: HeaderService) {
    header.headerData={
      title:'Cadastros',
      icone:'people',
      url:'/cadastro'
    }
   }

  ngOnInit(): void {
  }

  navigateToCadastroCreated():void{
    this.router.navigate(['cadastro/created'])
  }

}
