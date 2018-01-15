import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboraComponent } from './colabora.component';

describe('ColaboraComponent', () => {
  let component: ColaboraComponent;
  let fixture: ComponentFixture<ColaboraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaboraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
