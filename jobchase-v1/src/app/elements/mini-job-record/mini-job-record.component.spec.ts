import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniJobRecordComponent } from './mini-job-record.component';

describe('MiniJobRecordComponent', () => {
  let component: MiniJobRecordComponent;
  let fixture: ComponentFixture<MiniJobRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniJobRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniJobRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
