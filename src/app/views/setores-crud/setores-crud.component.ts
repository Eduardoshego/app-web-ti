import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setores-crud',
  templateUrl: './setores-crud.component.html',
  styleUrls: ['./setores-crud.component.css']
})
export class SetoresCrudComponent implements OnInit {

  constructor(private header:HeaderService) {
    header.headerData={
      title:'Setores',
      icone:'business',
      url:'/setores'
    }
   }

  ngOnInit(): void {
  }

}
