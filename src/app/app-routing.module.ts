import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilulierComponent } from './pages/pilulier/pilulier/pilulier.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppComponent } from './app.component';
import { PilulierNewComponent } from './pages/pilulier-new/pilulier-new.component';


const routes: Routes = [
  {
    path: 'piluliers',
    component: PilulierComponent,
  },
  {
    path: 'piluliers/new',
    component: PilulierNewComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
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
