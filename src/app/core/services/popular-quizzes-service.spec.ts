import { TestBed } from '@angular/core/testing';

import { PopularQuizzesService } from './popular-quizzes-service';

describe('PopularQuizzesService', () => {
  let service: PopularQuizzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularQuizzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
