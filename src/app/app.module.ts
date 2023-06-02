import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoticiasDestacadasComponent } from './noticias-destacadas/noticias-destacadas.component';
import { UltimasNoticiasComponent } from './ultimas-noticias/ultimas-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticiasDestacadasComponent,
    UltimasNoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
