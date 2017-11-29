import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbBrandingComponent } from './ngb-branding.component';

describe('NgbBrandingComponent', () => {
  let component: NgbBrandingComponent;
  let fixture: ComponentFixture<NgbBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
