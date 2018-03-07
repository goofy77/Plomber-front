import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectCreatorComponent } from './defect-creator.component';

describe('DefectCreatorComponent', () => {
  let component: DefectCreatorComponent;
  let fixture: ComponentFixture<DefectCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
