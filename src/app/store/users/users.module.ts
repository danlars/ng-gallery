import { NgModule } from '@angular/core';
import {UsersService} from './users.service';
import {StoreModule} from '@ngrx/store';
import {DatabaseModule} from '../../database/database.module';
import {usersReducer} from './users.reducers';
import {usersStateKey} from './users-state.key';

@NgModule({
  imports: [
    StoreModule.forFeature(usersStateKey, usersReducer),
    DatabaseModule,
  ],
  providers: [
    UsersService
  ],
})
export class UsersModule { }
