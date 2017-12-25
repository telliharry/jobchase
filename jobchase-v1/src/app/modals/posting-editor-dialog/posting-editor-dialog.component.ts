import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField, MatFormFieldControl } from '@angular/material';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { JobPostingEditorComponent } from '../../elements/job-posting-editor/job-posting-editor.component';


@Component({
  selector: 'jc-posting-editor-dialog',
  templateUrl: './posting-editor-dialog.component.html',
  styleUrls: ['./posting-editor-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostingEditorDialogComponent implements OnInit {

  @ViewChild("jcJobPostingEditor") jcJobPostingEditor: JobPostingEditorComponent;
  
  postingTitle: string;

  constructor(
    public dialogRef: MatDialogRef<PostingEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
    // temporary
    this.postingTitle = "Job posting 123";
    // ...

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  saveJobPosting() {
    console.log("saveJobPosting() clicked.");

    // tbd...
    // ...


    this.closeDialog();
  }


}
