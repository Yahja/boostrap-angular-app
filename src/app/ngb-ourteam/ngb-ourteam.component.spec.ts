import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbOurteamComponent } from './ngb-ourteam.component';

describe('NgbOurteamComponent', () => {
  let component: NgbOurteamComponent;
  let fixture: ComponentFixture<NgbOurteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbOurteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbOurteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
