import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { CareerComponent } from './career/career.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    component: BodyComponent,
  path:''
},
{
  component:ContactComponent,
  path:'contact'
},
{
  component: AboutComponent,
  path:'about'
},
{
  component: CareerComponent,
  path:'career'
},
{
  component: LoginComponent,
  path:'login'
},
{
  component: RegisterComponent,
  path:'signUp'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
