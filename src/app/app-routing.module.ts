import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedComponent } from './pages/deleted/deleted.component';
import { LikedComponent } from './pages/liked/liked.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    pathMatch: 'prefix',
    component: MainComponent
  },
  {
    path: 'liked',
    pathMatch: 'prefix',
    component: LikedComponent
  },
  {
    path: 'deleted',
    pathMatch: 'prefix',
    component: DeletedComponent
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'main'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
