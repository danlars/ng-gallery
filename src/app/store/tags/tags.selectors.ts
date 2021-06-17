import {createFeatureSelector, createSelector} from '@ngrx/store';
import {tagsStateKey} from './tags-state.key';
import {TagsStateInterface} from './tags.state.interface';
const featureSelector = createFeatureSelector<TagsStateInterface >(tagsStateKey);

export const selectTags = createSelector(featureSelector, (tagsState) => {
  return tagsState.tags;
});
