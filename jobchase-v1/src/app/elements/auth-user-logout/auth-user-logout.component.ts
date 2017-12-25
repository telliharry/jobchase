import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-auth-user-logout',
  templateUrl: './auth-user-logout.component.html',
  styleUrls: ['./auth-user-logout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthUserLogoutComponent implements OnInit {

  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
