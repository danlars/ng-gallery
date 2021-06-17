import {createAction, props} from '@ngrx/store';
import {TagInterface} from '../../interfaces/tag.interface';

export const addTag = createAction('[Tags] Add Tag', props<{tag: TagInterface}>());
export const setTags = createAction('[Tags] Set tags', props<{tags: TagInterface[]}>());
export const updateTag = createAction('[Tags] Update Tag', props<{tag: TagInterface}>());
export const removeTag = createAction('[Tags] Remove Tag', props<{tag: TagInterface}>());
