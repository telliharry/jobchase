import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredJobListComponent } from './preferred-job-list.component';

describe('PreferredJobListComponent', () => {
  let component: PreferredJobListComponent;
  let fixture: ComponentFixture<PreferredJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
