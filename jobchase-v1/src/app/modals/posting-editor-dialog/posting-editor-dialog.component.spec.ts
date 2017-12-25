import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingEditorDialogComponent } from './posting-editor-dialog.component';

describe('PostingEditorDialogComponent', () => {
  let component: PostingEditorDialogComponent;
  let fixture: ComponentFixture<PostingEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
