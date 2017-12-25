import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailRecordComponent } from './job-detail-record.component';

describe('JobDetailRecordComponent', () => {
  let component: JobDetailRecordComponent;
  let fixture: ComponentFixture<JobDetailRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
