import { Injectable } from '@angular/core';

import { Projeto } from '../models/projeto';

@Injectable()
export class ProjetosService {

  constructor() { }

  get(): Array<Projeto> {
    const p : Projeto = {nome: 'Eduardo', data: new Date(Date.now()), descricao: 'Olá mundo', link: 'http://teste'};
    const arr = new Array<Projeto>();
    arr.push(p);
    return arr;
  }

}
