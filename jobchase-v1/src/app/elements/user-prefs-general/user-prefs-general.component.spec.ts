import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrefsGeneralComponent } from './user-prefs-general.component';

describe('UserPrefsGeneralComponent', () => {
  let component: UserPrefsGeneralComponent;
  let fixture: ComponentFixture<UserPrefsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPrefsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrefsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
