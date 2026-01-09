import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularQuizzes } from './popular-quizzes';

describe('PopularQuizzes', () => {
  let component: PopularQuizzes;
  let fixture: ComponentFixture<PopularQuizzes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularQuizzes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularQuizzes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
