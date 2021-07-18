import { NgModule } from '@angular/core';
import {ImageTableService} from './image-table.service';
import {SchemasService} from './schemas.service';
import {TagsTableService} from './tags-table.service';
import {UsersTableService} from './users-table.service';

@NgModule({
  providers: [SchemasService, ImageTableService, TagsTableService, UsersTableService],
  imports: []
})
export class DatabaseModule { }
