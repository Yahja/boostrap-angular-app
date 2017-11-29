import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbGraphicComponent } from './ngb-graphic.component';

describe('NgbGraphicComponent', () => {
  let component: NgbGraphicComponent;
  let fixture: ComponentFixture<NgbGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
