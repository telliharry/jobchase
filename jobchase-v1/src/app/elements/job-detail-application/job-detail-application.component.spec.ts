import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailApplicationComponent } from './job-detail-application.component';

describe('JobDetailApplicationComponent', () => {
  let component: JobDetailApplicationComponent;
  let fixture: ComponentFixture<JobDetailApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
