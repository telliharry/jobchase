import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailMemoComponent } from './job-detail-memo.component';

describe('JobDetailMemoComponent', () => {
  let component: JobDetailMemoComponent;
  let fixture: ComponentFixture<JobDetailMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
