import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { JobSummary, JobPosting, JobApplication, JobFollowup, JobMemo, JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { FavoriteJobRecordComponent } from '../../elements/favorite-job-record/favorite-job-record.component';


@Component({
  selector: 'jc-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoritesPageComponent implements OnInit {

  @ViewChild("jcFavoriteJobRecord") jcFavoriteJobRecord: FavoriteJobRecordComponent;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
