import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchs-crud',
  templateUrl: './switchs-crud.component.html',
  styleUrls: ['./switchs-crud.component.css']
})
export class SwitchsCrudComponent implements OnInit {

  constructor(private header: HeaderService) {
    header.headerData={
      title:'Switchs',
      icone:'router',
      url:'/switchs'
    }
   }

  ngOnInit(): void {
  }

}
