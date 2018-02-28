import { Component, OnInit } from '@angular/core';

import { ProjetosService } from '../services/projetos.service';
import { Projeto } from '../models/projeto';
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  public obj: Array<Projeto>;

  constructor(public projetos_s: ProjetosService) { }

  ngOnInit() {
    this.obj = this.projetos_s.get();
  }

}
