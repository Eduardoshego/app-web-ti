import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeaderService}from '../../services/header.service'

@Component({
  selector: 'app-equipamentos-crud',
  templateUrl: './equipamentos-crud.component.html',
  styleUrls: ['./equipamentos-crud.component.css']
})
export class EquipamentosCrudComponent implements OnInit {

  constructor(private router:Router, private header: HeaderService ) {
    header.headerData={
      title: 'Equipamentos',
      icone: 'computer',
      url: '/equipamentos'


    }
   }

  ngOnInit(): void {
  }

  navigateToComputer(): void{
    this.router.navigate(['computadores'])
    console.log("indo para computadores")
  }

  navigateToImpressoras():void{
    this.router.navigate(['prints'])
    console.log("indo para impressoras")
  }
  navigateToMonitores() : void{
    this.router.navigate(['monitores'])
  }
  navigateToSwitchs() : void{
    this.router.navigate(['switchs'])
  }
  navigateToEstabilizadores() : void{
    this.router.navigate(['estabilizadores'])
  }
  

}
[]