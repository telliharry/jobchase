import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-record-search-query',
  templateUrl: './record-search-query.component.html',
  styleUrls: ['./record-search-query.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecordSearchQueryComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
