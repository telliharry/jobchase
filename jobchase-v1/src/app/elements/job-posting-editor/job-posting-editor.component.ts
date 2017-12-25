import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { ContactType, ContactInfo } from '@jobchase/jobmodel';
import { JobPosting } from '@jobchase/jobmodel';

import { JobchaseViewDataService } from '../../services/jobchase-view-data.service';


@Component({
  selector: 'jc-job-posting-editor',
  templateUrl: './job-posting-editor.component.html',
  styleUrls: ['./job-posting-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobPostingEditorComponent implements OnInit {

  @Input("user-id") userId: string;
  @Input("job-id") jobId: string;

  // TBD:
  // use JobPosting object ???
  postingUrl: string;
  // original Posted date?
  postingTitle: string;
  // Position name?
  employerName: string;
  // Location/address ??
  // TBD: ContactInfo should really include multiple contact infos for the same person/name ????
  contactEmail: ContactInfo;
  contactPhone: ContactInfo;
  // application url? (if different from posting url?)
  // application deadline ???
  // ...
  

  constructor(private viewDataService: JobchaseViewDataService) {
  }

  ngOnInit() {
    // temporary
    this.postingTitle = "Job posting xyz";
    this.postingUrl = "http://apple.com/jobs";
    this.employerName = "Apple";
    // ...
    this.contactEmail = new ContactInfo(
      "Tim Cook",
      "tim@apple.com",
      ContactType.email
    );
    this.contactPhone = new ContactInfo(
      "Tim Cook",
      "555-555-5555",
      ContactType.phone
    );
    // ...

  }

  // closeDialog(): void {
  //   // ???
  // }

  // saveJobPosting() {
  //   console.log("saveJobPosting() clicked.");

  //   // tbd...
  //   // ...

  //   this.closeDialog();
  // }


}
