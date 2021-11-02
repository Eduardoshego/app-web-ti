import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.css']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private router:Router, private headerService: HeaderService) {
    headerService.headerData = {
      title:  'Estoque',
      icone: 'inventory',
      url: '/produtos'
    }
   }

  ngOnInit(): void {
  }

  navigateProdutoCreate(): void{
    this.router.navigate(['/produto/created']);
    console.log("indo");
  }

}
