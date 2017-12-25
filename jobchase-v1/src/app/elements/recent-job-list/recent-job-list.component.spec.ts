import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobListComponent } from './recent-job-list.component';

describe('RecentJobListComponent', () => {
  let component: RecentJobListComponent;
  let fixture: ComponentFixture<RecentJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
