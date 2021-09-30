import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { EditprofileComponent } from './pages/user/editprofile/editprofile.component';
import { AddtaskComponent } from './pages/task/addtask/addtask.component';
import { MytasksComponent } from './pages/task/mytasks/mytasks.component';
import { EdittasksComponent } from './pages/task/edittasks/edittasks.component';
import { SingletaskComponent } from './pages/task/singletask/singletask.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserInterceptor } from './provider/user.interceptor';
import { Err404Component } from './pages/err404/err404.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EditprofileComponent,
    AddtaskComponent,
    MytasksComponent,
    EdittasksComponent,
    SingletaskComponent,
    NavComponent,
    FooterComponent,
    HomepageComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
