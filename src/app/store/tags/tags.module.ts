import { NgModule } from '@angular/core';
import {TagsService} from './tags.service';
import {StoreModule} from '@ngrx/store';
import {DatabaseModule} from '../../database/database.module';
import {tagsStateKey} from './tags-state.key';
import {tagsReducer} from './tags.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(tagsStateKey, tagsReducer),
    DatabaseModule,
  ],
  providers: [TagsService],
})
export class TagsModule { }
