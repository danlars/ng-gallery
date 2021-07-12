import {TagsStateInterface} from './tags.state.interface';
import {createReducer, on} from '@ngrx/store';
import {addTag, removeTag, setTags, updateTag} from './tags.actions';

const initialState: TagsStateInterface = {
  tags: [],
};

export const tagsReducer = createReducer(
  initialState,
  on(addTag, (state, {tag}) => {
    const tags = [...state.tags];
    const addedTag = {...tag};
    tags.push(addedTag);
    return {
      ...state,
      tags,
    };
  }),
  on(updateTag, (state, {tag}) => {
    const tags = [...state.tags];
    const tagIndex = tags.findIndex(stateTag => stateTag.id === tag.id);
    tags.splice(tagIndex, 1, tag);
    return {
      ...state,
      tags,
    };
  }),
  on(removeTag, (state, {tag}) => {
    const tags = [...state.tags];
    const tagIndex = tags.findIndex(stateTag => stateTag.id === tag.id);
    tags.splice(tagIndex, 1);
    return {
      ...state,
      tags,
    };
  }),
  on(setTags, (state, {tags}) => ({...state, tags})),
)
