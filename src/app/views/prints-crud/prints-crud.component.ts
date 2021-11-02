import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prints-crud',
  templateUrl: './prints-crud.component.html',
  styleUrls: ['./prints-crud.component.css']
})
export class PrintsCrudComponent implements OnInit {

  constructor(private header:HeaderService) { 
    header.headerData={
      title:'Impressoras',
      icone:'print',
      url:'/printers'
    }
  }
  ngOnInit(): void {
  }

}
