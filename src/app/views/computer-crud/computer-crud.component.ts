import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-crud',
  templateUrl: './computer-crud.component.html',
  styleUrls: ['./computer-crud.component.css']
})
export class ComputerCrudComponent implements OnInit {

  constructor(private header : HeaderService) {
    this.header.headerData={
      title:'Computadores',
      icone:'computer',
      url:'/computers'
    }
   }

  ngOnInit(): void {
  }

}
