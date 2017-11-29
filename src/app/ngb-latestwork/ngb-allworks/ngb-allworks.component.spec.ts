import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbAllworksComponent } from './ngb-allworks.component';

describe('NgbAllworksComponent', () => {
  let component: NgbAllworksComponent;
  let fixture: ComponentFixture<NgbAllworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbAllworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbAllworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
