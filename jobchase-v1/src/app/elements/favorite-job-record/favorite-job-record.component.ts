import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { MiniJobRecordComponent } from '../mini-job-record/mini-job-record.component';


@Component({
  selector: 'jc-favorite-job-record',
  templateUrl: './favorite-job-record.component.html',
  styleUrls: ['./favorite-job-record.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteJobRecordComponent implements OnInit {

  // @ViewChild("jcMiniJobRecord") jcMiniJobRecord: MiniJobRecordComponent;

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
