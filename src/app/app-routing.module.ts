import { PreviousCircularComponent } from './Components/previous-circular/previous-circular.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErecruitmentComponent } from './Components/erecruitment/erecruitment.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { CreateCircularComponent } from './Components/create-circular/create-circular.component';
import { SearchJobComponent } from './Components/search-job/search-job.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { CircularDetailsComponent } from './Components/circular-details/circular-details.component';
import { ECvComponent } from './Components/e-cv/e-cv.component';
import { ApplicantsComponent } from './Components/applicants/applicants.component';
import { EvalutionComponent } from './Components/evalution/evalution.component';

const routes: Routes = [
  {path: "", redirectTo : "E-Recruitment", pathMatch: 'full'},

  {path : "E-Recruitment", 
  component : ErecruitmentComponent,
  children : [
    {path: "", component : NavbarComponent, outlet: 'nav'},
    {path: "", component : LoginComponent, outlet: 'login'},
  ]
},
  {path: "sign-up", component : SignupComponent,
    children : [
        {path: "", component : NavbarComponent, outlet: 'nav'},
      ]
  },
  {path: "Dashboard", component : DashboardComponent,
    children : [
        {path: "", component : NavbarComponent, outlet: 'nav'},
        {path: "", component : OverviewComponent, outlet: 'pannel'},
        {path: "create-circular", component : CreateCircularComponent, outlet: 'pannel'},
        {path: "previous-circular", component : PreviousCircularComponent, outlet: 'pannel'},
        {path: "blogs", component : NavbarComponent, outlet: 'pannel'},
        {path: "applicants/:id", component : ApplicantsComponent, outlet: 'pannel'},
      ]
  },
  {path: "User-Dashboard", component : UserDashboardComponent,
    children : [
        {path: "", component : NavbarComponent, outlet: 'nav'},
        {path: "", component : SearchJobComponent, outlet: 'pannel'},
        {path: "search-circular", component : SearchJobComponent, outlet: 'pannel'},
        {path: "circular/:id", component : CircularDetailsComponent, outlet: 'pannel'},
        {path: "e-cv", component : ECvComponent, outlet: 'pannel'},
        {path: "previous-circular", component : PreviousCircularComponent, outlet: 'pannel'},
        {path: "blogs", component : NavbarComponent, outlet: 'pannel'},
      ]
  },
  {path: "evalution/:aId/:cId", component: EvalutionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
