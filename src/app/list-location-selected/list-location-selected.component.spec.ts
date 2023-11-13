import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocationSelectedComponent } from './list-location-selected.component';

describe('ListLocationSelectedComponent', () => {
  let component: ListLocationSelectedComponent;
  let fixture: ComponentFixture<ListLocationSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLocationSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLocationSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
