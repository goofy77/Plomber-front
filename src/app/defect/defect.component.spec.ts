import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectComponentComponent } from './defect.component';

describe('DefectComponentComponent', () => {
  let component: DefectComponentComponent;
  let fixture: ComponentFixture<DefectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
