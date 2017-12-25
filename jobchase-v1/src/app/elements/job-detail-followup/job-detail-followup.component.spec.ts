import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailFollowupComponent } from './job-detail-followup.component';

describe('JobDetailFollowupComponent', () => {
  let component: JobDetailFollowupComponent;
  let fixture: ComponentFixture<JobDetailFollowupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailFollowupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
