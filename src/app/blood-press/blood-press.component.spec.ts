import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPressComponent } from './blood-press.component';

describe('BloodPressComponent', () => {
  let component: BloodPressComponent;
  let fixture: ComponentFixture<BloodPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
