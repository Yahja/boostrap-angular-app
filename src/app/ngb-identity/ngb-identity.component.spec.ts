import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbIdentityComponent } from './ngb-identity.component';

describe('NgbIdentityComponent', () => {
  let component: NgbIdentityComponent;
  let fixture: ComponentFixture<NgbIdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbIdentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
