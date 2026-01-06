import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { provideRouter } from '@angular/router';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header], // Standalone component
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  // ---------- ngOnInit ----------
  it('should initialize menu items on ngOnInit', () => {
    expect(component.items).toBeDefined();
    expect(component.items!.length).toBe(4);

    expect(component.items![0].label).toBe('Home');
    expect(component.items![1].label).toBe('About Us');
    expect(component.items![2].label).toBe('Blog');
    expect(component.items![3].label).toBe('Contact Us');
  });

  // ---------- Theme Toggle ----------
  it('should toggle dark theme and update signal', () => {
    const html = document.documentElement;

    html.classList.remove('p-dark');
    expect(component.isDark()).toBeFalse();

    component.toggleTheme();

    expect(html.classList.contains('p-dark')).toBeTrue();
    expect(component.isDark()).toBeTrue();

    component.toggleTheme();

    expect(html.classList.contains('p-dark')).toBeFalse();
    expect(component.isDark()).toBeFalse();
  });

  // ---------- Dialog ----------
  it('should open dialog when showDialog() is called', () => {
    expect(component.isModalOpen()).toBeFalse();

    component.showDialog();

    expect(component.isModalOpen()).toBeTrue();
  });

  it('should close dialog when closeDialog() is called', () => {
    component.isModalOpen.set(true);

    component.closeDialog();

    expect(component.isModalOpen()).toBeFalse();
  });
});
