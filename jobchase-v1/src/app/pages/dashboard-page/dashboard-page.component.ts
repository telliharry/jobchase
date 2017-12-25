import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { PreferredJobListComponent } from '../../elements/preferred-job-list/preferred-job-list.component';
import { RecentJobListComponent } from '../../elements/recent-job-list/recent-job-list.component';


@Component({
  selector: 'jc-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPageComponent implements OnInit {

  @ViewChild("jcPreferredJobList") jcPreferredJobList: PreferredJobListComponent;
  @ViewChild("jcRecentJobList") jcRecentJobList: RecentJobListComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
