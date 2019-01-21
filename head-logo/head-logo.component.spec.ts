import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLogoComponent } from './head-logo.component';

describe('HeadLogoComponent', () => {
  let component: HeadLogoComponent;
  let fixture: ComponentFixture<HeadLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
