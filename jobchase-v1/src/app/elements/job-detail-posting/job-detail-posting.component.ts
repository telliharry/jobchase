import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobPosting } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-job-detail-posting',
  templateUrl: './job-detail-posting.component.html',
  styleUrls: ['./job-detail-posting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailPostingComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
