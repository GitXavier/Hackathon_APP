import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilulierComponent } from './pages/pilulier/pilulier/pilulier.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppComponent } from './app.component';
import { NewUserComponent } from './pages/new-user/new-user.component';


const routes: Routes = [
  {
    path: 'piluliers',
    component: PilulierComponent,
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {path:'users/new', component: NewUserComponent},
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
