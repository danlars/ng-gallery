import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {UserInterface} from '../../interfaces/user.interface';
import {UsersTableService} from '../../database/users-table.service';
import {addUser, removeUser, setUsers, updateUser} from './users.actions';
import {selectUsers} from './users.selectors';

@Injectable()
export class UsersService {
  users$: Observable<UserInterface[]>;
  constructor(private readonly store: Store, private readonly tableService: UsersTableService) {
    this.users$ = this.store.pipe(select(selectUsers));
  }

  async addUser(user: UserInterface) {
    const myNewUser = await this.tableService.addUser(user);
    this.store.dispatch(addUser({user: myNewUser}));
  }

  updateUser(user: UserInterface) {
    this.tableService.updateUser(user);
    this.store.dispatch(updateUser({user}));
  }

  removeUser(user: UserInterface) {
    this.tableService.removeUser(user);
    this.store.dispatch(removeUser({user}));
  }

  async getAllUsers() {
    const users = await this.tableService.getAllUsers();
    this.store.dispatch(setUsers({users}));
  }
}
