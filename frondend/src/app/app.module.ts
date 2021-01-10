import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavComponent } from './components/nav/nav.component';
import { VideoviewerComponent } from './components/videoviewer/videoviewer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

//enrutador
const routes : Route[] = [
  { path:'', component: HeaderComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'video', component: VideoviewerComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavComponent,
    VideoviewerComponent,
    FooterComponent,
    HeaderComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
