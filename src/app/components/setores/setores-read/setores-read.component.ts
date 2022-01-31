import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/model/Setores.model';
import { SetorService} from '../../../services/Setor.service'


@Component({
  selector: 'app-setores-read',
  templateUrl: './setores-read.component.html',
  styleUrls: ['./setores-read.component.css']
})
export class SetoresReadComponent implements OnInit {

  setores!: Setor[]
  displayedColumns = ['setor','telefone','ramal','action']

  constructor(private setor:SetorService) { }

  ngOnInit(  ): void {

    this.setor.read().subscribe(
      setores => {
        this.setores = setores
      }
    )

  }

}
