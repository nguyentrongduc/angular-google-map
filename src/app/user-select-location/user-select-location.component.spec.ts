import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectLocationComponent } from './user-select-location.component';

describe('UserSelectLocationComponent', () => {
  let component: UserSelectLocationComponent;
  let fixture: ComponentFixture<UserSelectLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSelectLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSelectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
