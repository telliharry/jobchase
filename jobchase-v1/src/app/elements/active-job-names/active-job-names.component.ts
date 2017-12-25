import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { JobRecord } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';

import { JobPostingEditorComponent } from '../job-posting-editor/job-posting-editor.component';


@Component({
  selector: 'jc-active-job-names',
  templateUrl: './active-job-names.component.html',
  styleUrls: ['./active-job-names.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveJobNamesComponent implements OnInit {

  // @ViewChild("jcJobPostingEditor") jcJobPostingEditor: JobPostingEditorComponent;

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;
  
  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
  }

}
