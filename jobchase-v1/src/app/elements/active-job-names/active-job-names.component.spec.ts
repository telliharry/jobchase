import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveJobNamesComponent } from './active-job-names.component';

describe('ActiveJobNamesComponent', () => {
  let component: ActiveJobNamesComponent;
  let fixture: ComponentFixture<ActiveJobNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveJobNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveJobNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
