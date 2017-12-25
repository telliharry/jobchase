import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { ActiveJobNamesComponent } from '../../elements/active-job-names/active-job-names.component';
import { JobDetailRecordComponent } from '../../elements/job-detail-record/job-detail-record.component';


@Component({
  selector: 'jc-workspace-page',
  templateUrl: './workspace-page.component.html',
  styleUrls: ['./workspace-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkspacePageComponent implements OnInit {

  @ViewChild("jcActiveJobNames") jcActiveJobNames: ActiveJobNamesComponent;
  @ViewChild("jcJobDetailRecord") jcJobDetailRecord: JobDetailRecordComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
