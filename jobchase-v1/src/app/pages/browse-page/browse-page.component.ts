import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { MiniJobRecordComponent } from '../../elements/mini-job-record/mini-job-record.component';
import { JobPostingEditorComponent } from '../../elements/job-posting-editor/job-posting-editor.component';


@Component({
  selector: 'jc-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BrowsePageComponent implements OnInit {

  // @ViewChild("jcMiniJobRecord") jcMiniJobRecord: MiniJobRecordComponent;
  // @ViewChild("jcJobPostingEditor") jcJobPostingEditor: JobPostingEditorComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
