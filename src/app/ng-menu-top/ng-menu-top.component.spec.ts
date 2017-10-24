import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMenuTopComponent } from './ng-menu-top.component';

describe('NgMenuTopComponent', () => {
  let component: NgMenuTopComponent;
  let fixture: ComponentFixture<NgMenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
