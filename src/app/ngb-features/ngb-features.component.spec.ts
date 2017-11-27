import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbFeaturesComponent } from './ngb-features.component';

describe('NgbFeaturesComponent', () => {
  let component: NgbFeaturesComponent;
  let fixture: ComponentFixture<NgbFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
