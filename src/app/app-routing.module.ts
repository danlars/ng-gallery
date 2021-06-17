import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/images',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users-page/users-page.module').then( m => m.UsersPageModule),
  },
  {
    path: 'images',
    loadChildren: () => import('./pages/images-page/images-page.module').then( m => m.ImagesPageModule),
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/tags-page/tags-page.module').then( m => m.TagsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
