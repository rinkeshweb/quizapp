import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should have dialog hidden by default', () => {
    expect(component.visible).toBeFalse();
  });

  it('should open dialog', () => {
    component.showDialog();
    expect(component.visible).toBeTrue();
  });

  it('should close dialog', () => {
    component.visible = true;
    component.closeDialog();
    expect(component.visible).toBeFalse();
  });
});
