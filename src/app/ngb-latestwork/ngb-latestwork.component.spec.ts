import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbLatestworkComponent } from './ngb-latestwork.component';

describe('NgbLatestworkComponent', () => {
  let component: NgbLatestworkComponent;
  let fixture: ComponentFixture<NgbLatestworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbLatestworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbLatestworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
