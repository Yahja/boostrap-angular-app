import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbWhyusComponent } from './ngb-whyus.component';

describe('NgbWhyusComponent', () => {
  let component: NgbWhyusComponent;
  let fixture: ComponentFixture<NgbWhyusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbWhyusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbWhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
