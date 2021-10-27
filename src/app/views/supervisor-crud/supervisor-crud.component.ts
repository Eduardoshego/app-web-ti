import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-crud',
  templateUrl: './supervisor-crud.component.html',
  styleUrls: ['./supervisor-crud.component.css']
})
export class SupervisorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSupervisorCreated():void{
    this.router.navigate(['pessoas/created'])
  }

}
