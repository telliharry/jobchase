import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJobRecordComponent } from './favorite-job-record.component';

describe('FavoriteJobRecordComponent', () => {
  let component: FavoriteJobRecordComponent;
  let fixture: ComponentFixture<FavoriteJobRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteJobRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJobRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
