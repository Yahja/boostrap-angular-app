import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbWebdesignComponent } from './ngb-webdesign.component';

describe('NgbWebdesignComponent', () => {
  let component: NgbWebdesignComponent;
  let fixture: ComponentFixture<NgbWebdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbWebdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbWebdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
