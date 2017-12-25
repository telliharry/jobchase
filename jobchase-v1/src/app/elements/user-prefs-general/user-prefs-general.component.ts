import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { UserPreference } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-user-prefs-general',
  templateUrl: './user-prefs-general.component.html',
  styleUrls: ['./user-prefs-general.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserPrefsGeneralComponent implements OnInit {

  @Input("user-id") userId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
