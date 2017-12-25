import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-auth-user-login',
  templateUrl: './auth-user-login.component.html',
  styleUrls: ['./auth-user-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthUserLoginComponent implements OnInit {

  @Input("job-id") jobId: string;

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
