import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailSummaryComponent } from './job-detail-summary.component';

describe('JobDetailSummaryComponent', () => {
  let component: JobDetailSummaryComponent;
  let fixture: ComponentFixture<JobDetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
