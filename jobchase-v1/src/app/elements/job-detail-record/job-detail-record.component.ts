import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { JobDetailSummaryComponent } from '../job-detail-summary/job-detail-summary.component';
import { JobDetailPostingComponent } from '../job-detail-posting/job-detail-posting.component';
import { JobDetailApplicationComponent } from '../job-detail-application/job-detail-application.component';
import { JobDetailFollowupComponent } from '../job-detail-followup/job-detail-followup.component';
import { JobDetailMemoComponent } from '../job-detail-memo/job-detail-memo.component';


@Component({
  selector: 'jc-job-detail-record',
  templateUrl: './job-detail-record.component.html',
  styleUrls: ['./job-detail-record.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailRecordComponent implements OnInit {

  @ViewChild("jcJobDetailSummary") jcJobDetailSummary: JobDetailSummaryComponent;
  @ViewChild("jcJobDetailPosting") jcJobDetailPosting: JobDetailPostingComponent;
  @ViewChild("jcJobDetailApplication") jcJobDetailApplication: JobDetailApplicationComponent;
  @ViewChild("jcJobDetailFollowup") jcJobDetailFollowup: JobDetailFollowupComponent;
  @ViewChild("jcJobDetailMemo") jcJobDetailMemo: JobDetailMemoComponent;
  
  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
