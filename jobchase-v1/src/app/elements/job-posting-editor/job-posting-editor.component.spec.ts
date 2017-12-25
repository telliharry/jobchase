import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingEditorComponent } from './job-posting-editor.component';

describe('JobPostingEditorComponent', () => {
  let component: JobPostingEditorComponent;
  let fixture: ComponentFixture<JobPostingEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPostingEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostingEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
