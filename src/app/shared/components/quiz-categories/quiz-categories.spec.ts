import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCategories } from './quiz-categories';

describe('QuizCategories', () => {
  let component: QuizCategories;
  let fixture: ComponentFixture<QuizCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
