import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';

import { ProjetosService } from './services/projetos.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProjetosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
