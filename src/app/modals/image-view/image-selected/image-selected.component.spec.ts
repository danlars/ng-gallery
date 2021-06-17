import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectedComponent } from './image-selected.component';

describe('ImageSelectedComponent', () => {
  let component: ImageSelectedComponent;
  let fixture: ComponentFixture<ImageSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
