import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobSummary } from '@jobchase/jobmodel';


import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-job-detail-summary',
  templateUrl: './job-detail-summary.component.html',
  styleUrls: ['./job-detail-summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailSummaryComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
