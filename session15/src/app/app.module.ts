import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleserviceComponent } from './pages/singleservice/singleservice.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactComponent } from './shared/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleserviceComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
