import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBkupComponent } from './app-bkup.component';

describe('AppBkupComponent', () => {
  let component: AppBkupComponent;
  let fixture: ComponentFixture<AppBkupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBkupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
