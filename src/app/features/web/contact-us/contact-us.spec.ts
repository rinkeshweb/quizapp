import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ContactUs } from './contact-us';
import { ToastService } from '@core/services/toast-service';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactUs', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;
  let toastSpy: jasmine.SpyObj<ToastService>;


  beforeEach(async () => {
    toastSpy = jasmine.createSpyObj('ToastService', ['success']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ContactUs],
      providers: [
        { provide: ToastService, useValue: toastSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  })

  it('should have invalid form initially', () => {
    expect(component.contactForm.invalid).toBeTrue();
  })

  it('should invalidate name if less than 3 characters', () => {
    const name = component.contactForm.controls.name;
    name.setValue('Jo');
    expect(name.invalid).toBeTrue();
  });

  it('should return required error message for name', () => {
    const name = component.contactForm.controls.name;
    name.setValue('');
    name.markAsTouched();

    const error = component.getError('name');
    expect(error).toContain('required');
  });

  it('should allow sumbit when form valid and not loading', () => {
    component.formValid.set(true);
    component.isLoading.set(false);

    expect(component.canSubmit()).toBeTrue();
  })

  it('should disable form when loading is true', () => {
    component.isLoading.set(true);
    fixture.detectChanges();

    expect(component.contactForm.disabled).toBeTrue();
  })

  it('should not submit if form is invalid', () => {
    component.onSubmit();

    expect(component.isLoading()).toBeFalsy();
  })

  it('should submit form, rest it and show toast', fakeAsync(() => {
    component.contactForm.setValue({
      name: 'Rinkesh Kumar',
      email: 'rinkesh.on@gmail.com',
      subject: 'for job',
      message: 'I am looking for Angular developer job',
      subscribe: false
    })

    component.onSubmit();
    expect(component.isLoading()).toBeTrue();

    tick(1500);

    expect(component.isLoading()).toBeFalse();
    expect(component.contactForm.value.name).toBe('');
    expect(toastSpy.success).toHaveBeenCalled();

  }))

})
