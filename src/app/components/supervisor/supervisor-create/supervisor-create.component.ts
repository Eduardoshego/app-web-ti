import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../supervisor.service';
import { Supervisor } from '../Supervisor.mode'
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-supervisor-create',
  templateUrl: './supervisor-create.component.html',
  styleUrls: ['./supervisor-create.component.css']
})
export class SupervisorCreateComponent implements OnInit {

  supervisor: Supervisor = {
    supervisorNome: "",
    numTelefone: ""
  }

  constructor(private supervisorService: SupervisorService, private router : Router) { }

  ngOnInit(): void {
  }
  create():void{
    this.supervisorService.create(this.supervisor).subscribe(()=>{
      this.supervisorService.showMessage("Supervisor cadastrado com sucesso!")
      this.router.navigate(['/supervisores'])
    })
  }
  cancel():void{
    this.router.navigate(['/pessoas'])
  }


}
