import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ImagesPageComponent} from './images-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ImagesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesPageRoutingModule { }
