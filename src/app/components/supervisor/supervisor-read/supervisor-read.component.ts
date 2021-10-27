import { Component, OnInit } from '@angular/core';
import { SupervisorService} from '../supervisor.service';
import { Supervisor } from '../Supervisor.mode';

@Component({
  selector: 'app-supervisor-read',
  templateUrl: './supervisor-read.component.html',
  styleUrls: ['./supervisor-read.component.css']
})
export class SupervisorReadComponent implements OnInit {

  supervisores!:Supervisor[];
  displayedColumns = ['supervisorNome','numTelefone','action']

  constructor(private supervisorService: SupervisorService) { }

  ngOnInit(): void {
    this.supervisorService.read().subscribe(supervisor =>{
      this.supervisores = supervisor
    })
  }

}
