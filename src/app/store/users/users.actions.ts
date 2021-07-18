import {createAction, props} from '@ngrx/store';
import {UserInterface} from '../../interfaces/user.interface';

export const addUser = createAction('[Users] Add User', props<{user: UserInterface}>());
export const setUsers = createAction('[Users] Set Users', props<{users: UserInterface[]}>());
export const updateUser = createAction('[Users] Update User', props<{user: UserInterface}>());
export const removeUser = createAction('[Users] Remove User', props<{user: UserInterface}>());
