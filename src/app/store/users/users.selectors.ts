import {createFeatureSelector, createSelector} from '@ngrx/store';
import {usersStateKey} from './users-state.key';
import {UsersStateInterface} from './users.state.interface';
const featureSelector = createFeatureSelector<UsersStateInterface >(usersStateKey);

export const selectUsers = createSelector(featureSelector, (tagsState) => {
  return tagsState.users;
});
