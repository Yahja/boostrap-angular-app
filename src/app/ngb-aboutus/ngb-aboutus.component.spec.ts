import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbAboutusComponent } from './ngb-aboutus.component';

describe('NgbAboutusComponent', () => {
  let component: NgbAboutusComponent;
  let fixture: ComponentFixture<NgbAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
