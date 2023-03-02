import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryComponent } from './components/library/library.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltroPipe } from './pipes/filtro/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    HomeComponent,
    FooterComponent,
    LibraryComponent,
    FiltroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
