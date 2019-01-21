import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideunitComponent } from './slideunit.component';

describe('SlideunitComponent', () => {
  let component: SlideunitComponent;
  let fixture: ComponentFixture<SlideunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
