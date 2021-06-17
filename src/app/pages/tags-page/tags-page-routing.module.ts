import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {TagsPageComponent} from './tags-page.component';

const routes: Route[] = [
  {
    path: '',
    component: TagsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TagsPageRoutingModule { }
