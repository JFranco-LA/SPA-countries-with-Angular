import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisPeruComponent } from './views/pais-peru/pais-peru.component';
import { PaisChileComponent } from './views/pais-chile/pais-chile.component';
import { PaisUruguayComponent } from './views/pais-uruguay/pais-uruguay.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './components/shared/data/data.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisPeruComponent,
    PaisChileComponent,
    PaisUruguayComponent,
    SideBarComponent,
    HeaderComponent,
    DataComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
