import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserLogoutComponent } from './auth-user-logout.component';

describe('AuthUserLogoutComponent', () => {
  let component: AuthUserLogoutComponent;
  let fixture: ComponentFixture<AuthUserLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
