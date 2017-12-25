import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobFollowup } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-job-detail-followup',
  templateUrl: './job-detail-followup.component.html',
  styleUrls: ['./job-detail-followup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailFollowupComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
