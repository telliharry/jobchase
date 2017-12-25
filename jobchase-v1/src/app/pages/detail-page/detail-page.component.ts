import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { JobDetailRecordComponent } from '../../elements/job-detail-record/job-detail-record.component';


@Component({
  selector: 'jc-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailPageComponent implements OnInit {

  @ViewChild("jcJobDetailRecord") jcJobDetailRecord: JobDetailRecordComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
