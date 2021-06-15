import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ErecruitmentComponent } from './Components/erecruitment/erecruitment.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { CreateCircularComponent } from './Components/create-circular/create-circular.component';
import { PreviousCircularComponent } from './Components/previous-circular/previous-circular.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule ,HttpHeaders, HttpParams} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { SearchJobComponent } from './Components/search-job/search-job.component';
import { CircularDetailsComponent } from './Components/circular-details/circular-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ErecruitmentComponent,
    OverviewComponent,
    CreateCircularComponent,
    PreviousCircularComponent,
    UserDashboardComponent,
    SearchJobComponent,
    CircularDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
