import { BreadcrumbService } from './breadcrumb-service';
import { TestBed } from '@angular/core/testing';

describe('Breadcrumb', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
