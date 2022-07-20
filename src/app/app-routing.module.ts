import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeActionComponent } from './change-action/change-action.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' , component: HomeComponent, children:[
    {path:'', redirectTo:'main-menu', pathMatch:'full'},
    {path:'main-menu' , component: MainMenuComponent, data:{animation : 'slideRightLeft'}},
    {path:'change-action' , component: ChangeActionComponent, data:{animation: 'slideRightLeft'}}
  ]}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
