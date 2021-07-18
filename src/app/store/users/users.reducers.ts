import {UsersStateInterface} from './users.state.interface';
import {createReducer, on} from '@ngrx/store';
import {addUser, removeUser, setUsers, updateUser} from './users.actions';

const initialState: UsersStateInterface = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(setUsers, (state, {users}) => ({...state, users})),
  on(addUser, (state, {user}) => {
    const users = [...state.users];
    const addedUser = {...user};
    users.push(addedUser);
    return {
      ...state,
      users,
    }
  }),
  on(updateUser, (state, {user}) => {
    const users = [...state.users];
    const userIndex = users.findIndex(userState => userState.id === user.id);
    users.splice(userIndex, 1, {...user});
    return {
      ...state,
      users,
    }
  }),
  on(removeUser, (state, {user}) => {
    const users = [...state.users];
    const userIndex = users.findIndex(userState => userState.id === user.id);
    users.splice(userIndex, 1);
    return {
      ...state,
      users,
    }
  }),
)
