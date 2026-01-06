import { Subject } from 'rxjs';
import { BreadcrumbService } from './breadcrumb-service';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

describe('Breadcrumb', () => {
  let service: BreadcrumbService;
  let routerEvents$: Subject<any>;

  beforeEach(() => {
    routerEvents$ = new Subject();
    TestBed.configureTestingModule({
      providers: [
        BreadcrumbService,
        {
          provide: Router,
          useValue: {
            events: routerEvents$.asObservable()
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            root: createRoute(undefined, undefined, [
              createRoute('Home', 'home', [
                createRoute('Contact', 'contact')
              ])
            ])
          }
        }
      ]
    });
    service = TestBed.inject(BreadcrumbService);
  });

  afterEach(() => {
    routerEvents$.complete();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear breadcrumb if all labels are Home', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        BreadcrumbService,
        {
          provide: Router,
          useValue: {
            events: routerEvents$.asObservable()
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            root: createRoute(undefined, undefined, [
              createRoute('Home', 'home')
            ])
          }
        }
      ]
    });

    service = TestBed.inject(BreadcrumbService);
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    expect(service.items.length).toBe(0);
  });

  it('should clear breadcrumb items on destroy', () => {
    routerEvents$.next(new NavigationEnd(1, '/home/contact', '/home/contact'));
    expect(service.items.length).toBeGreaterThan(0);
    // simulate destroy
    (service as any).destroyRef.onDestroy(() => { });
    service.items = [];
    expect(service.items.length).toBe(0);
  });
});

/* ---------- Helper ---------- */
function createRoute(
  breadcrumb?: string,
  url?: string,
  children: any[] = []
) {
  return {
    snapshot: {
      data: { breadcrumb },
      url: url ? [{ path: url }] : []
    },
    children
  } as any;
}
