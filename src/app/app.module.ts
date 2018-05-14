import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';

import { ProjetosService } from './services/projetos.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetosComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ProjetosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
