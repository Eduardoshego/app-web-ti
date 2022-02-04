
import { HeaderService } from './../../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
  }

  get titel():string{
    return this.headerService.headerData.title
  }
  get icone(): string{
    return this.headerService.headerData.icone
  }
  get url(): string{
    return  this.headerService.headerData.url
  }
  

}
