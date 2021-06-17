import { TestBed } from '@angular/core/testing';

import { ImageTableService } from './image-table.service';

describe('ImageTableService', () => {
  let service: ImageTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
