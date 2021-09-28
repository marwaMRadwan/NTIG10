import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AddAddrComponent } from './pages/add-addr/add-addr.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddpostComponent } from './pages/addpost/addpost.component';
import { EditpostComponent } from './pages/editpost/editpost.component';
import { ShowmypostsComponent } from './pages/showmyposts/showmyposts.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UserInterceptor } from './providers/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddAddrComponent,
    ProfileComponent,
    AddpostComponent,
    EditpostComponent,
    ShowmypostsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
