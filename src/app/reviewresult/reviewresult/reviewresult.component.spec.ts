import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewresultComponent } from './reviewresult.component';

describe('ReviewresultComponent', () => {
  let component: ReviewresultComponent;
  let fixture: ComponentFixture<ReviewresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewresultComponent]
    });
    fixture = TestBed.createComponent(ReviewresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
