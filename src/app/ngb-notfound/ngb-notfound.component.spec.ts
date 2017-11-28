import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbNotfoundComponent } from './ngb-notfound.component';

describe('NgbNotfoundComponent', () => {
  let component: NgbNotfoundComponent;
  let fixture: ComponentFixture<NgbNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
