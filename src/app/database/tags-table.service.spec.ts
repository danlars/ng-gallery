import { TestBed } from '@angular/core/testing';

import { TagsTableService } from './tags-table.service';

describe('TagsTableService', () => {
  let service: TagsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
