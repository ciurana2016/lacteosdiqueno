import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosnodeloslacteosComponent } from './losnodeloslacteos.component';

describe('LosnodeloslacteosComponent', () => {
  let component: LosnodeloslacteosComponent;
  let fixture: ComponentFixture<LosnodeloslacteosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosnodeloslacteosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosnodeloslacteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
