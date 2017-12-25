import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { RecordSearchQueryComponent } from '../../elements/record-search-query/record-search-query.component';
import { RecordSearchResultComponent } from '../../elements/record-search-result/record-search-result.component';


@Component({
  selector: 'jc-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent implements OnInit {

  @ViewChild("jcRecordSearchQuery") jcRecordSearchQuery: RecordSearchQueryComponent;
  @ViewChild("jcRecordSearchResult") jcRecordSearchResult: RecordSearchResultComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
