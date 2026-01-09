import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingQuiz } from './upcoming-quiz';

describe('UpcomingQuiz', () => {
  let component: UpcomingQuiz;
  let fixture: ComponentFixture<UpcomingQuiz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingQuiz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingQuiz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
