import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErecruitmentComponent } from './Components/erecruitment/erecruitment.component';

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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
