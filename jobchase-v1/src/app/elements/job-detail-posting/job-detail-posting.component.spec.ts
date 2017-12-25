import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailPostingComponent } from './job-detail-posting.component';

describe('JobDetailPostingComponent', () => {
  let component: JobDetailPostingComponent;
  let fixture: ComponentFixture<JobDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
