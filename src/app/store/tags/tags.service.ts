import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TagsTableService} from '../../database/tags-table.service';
import {Observable} from 'rxjs';
import {TagInterface} from '../../interfaces/tag.interface';
import {selectTags} from './tags.selectors';
import {addTag, removeTag, setTags, updateTag} from './tags.actions';

@Injectable()
export class TagsService {
  tags$: Observable<TagInterface[]>;
  constructor(private readonly store: Store, private readonly tableService: TagsTableService) {
    this.tags$ = this.store.pipe(select(selectTags));
  }

  addTag(tag: TagInterface) {
    this.tableService.addTag(tag);
    this.store.dispatch(addTag({tag}));
  }

  updateTag(tag: TagInterface) {
    this.tableService.updateTag(tag);
    this.store.dispatch(updateTag({tag}));
  }

  removeTag(tag: TagInterface) {
    this.tableService.removeTag(tag);
    this.store.dispatch(removeTag({tag}));
  }

  async getAllTags() {
    const tags = await this.tableService.getAllTags();
    this.store.dispatch(setTags({tags}));
  }
}
