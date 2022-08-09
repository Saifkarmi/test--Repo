import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthModule } from './auth/auth.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path:'homepage',
  component:HomePageComponent

},
{
  path:'aboutus',
  component:AboutUsComponent
},
{
  path:'contactus',
  component:ContactUsComponent
},
{
  path:'',
  component:HomePageComponent
},
{
  path:'security',
  loadChildren:()=>AuthModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
