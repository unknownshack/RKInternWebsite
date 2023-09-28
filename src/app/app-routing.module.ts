import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
