import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { MiniJobRecordComponent } from '../mini-job-record/mini-job-record.component';
import { JobPostingEditorComponent } from '../job-posting-editor/job-posting-editor.component';


@Component({
  selector: 'jc-recent-job-list',
  templateUrl: './recent-job-list.component.html',
  styleUrls: ['./recent-job-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecentJobListComponent implements OnInit {

  // @ViewChild("jcMiniJobRecord") jcMiniJobRecord: MiniJobRecordComponent;
  // @ViewChild("jcJobPostingEditor") jcJobPostingEditor: JobPostingEditorComponent;
  
  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
