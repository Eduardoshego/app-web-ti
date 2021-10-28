import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.css']
})
export class CadastroCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCadastroCreated():void{
    this.router.navigate(['cadastro/created'])
  }

}
