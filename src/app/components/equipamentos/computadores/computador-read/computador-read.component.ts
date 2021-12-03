import { ComputadorService } from './../../../../services/computador.service';
import { Computador } from './../../../../model/Computador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computador-read',
  templateUrl: './computador-read.component.html',
  styleUrls: ['./computador-read.component.css']
})
export class ComputadorReadComponent implements OnInit {

  computador!:Computador[];
  displayedColumns = ['nome','ip','setor']

  constructor(private comp:ComputadorService) { }

  ngOnInit(): void {
    this.comp.read().subscribe(computador=>{
      this.computador = computador;
      console.log(computador)
    }
      )
    }

  }


