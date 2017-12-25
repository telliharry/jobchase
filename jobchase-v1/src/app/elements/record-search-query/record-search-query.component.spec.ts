import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSearchQueryComponent } from './record-search-query.component';

describe('RecordSearchQueryComponent', () => {
  let component: RecordSearchQueryComponent;
  let fixture: ComponentFixture<RecordSearchQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordSearchQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSearchQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
