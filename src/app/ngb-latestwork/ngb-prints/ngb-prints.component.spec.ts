import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbPrintsComponent } from './ngb-prints.component';

describe('NgbPrintsComponent', () => {
  let component: NgbPrintsComponent;
  let fixture: ComponentFixture<NgbPrintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbPrintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
