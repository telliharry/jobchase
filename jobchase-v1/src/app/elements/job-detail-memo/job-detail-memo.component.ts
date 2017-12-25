import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobMemo } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-job-detail-memo',
  templateUrl: './job-detail-memo.component.html',
  styleUrls: ['./job-detail-memo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailMemoComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
