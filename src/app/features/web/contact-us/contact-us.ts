import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ToastService } from '@core/services/toast-service';

@Component({
  selector: 'app-contact-us',
  imports: [CheckboxModule, InputTextModule, ButtonModule, TextareaModule, CardModule, ReactiveFormsModule, FloatLabel, MessageModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  private fb = inject(FormBuilder);
  private toast = inject(ToastService);

  submitted = signal(false);
  isLoading = signal<boolean>(false);
  formValid = signal<boolean>(false);

  contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    subscribe: [false]
  })

  canSubmit = computed(() =>
    this.formValid() && !this.isLoading()
  )

  constructor() {
    this.contactForm.statusChanges.subscribe(status => {
      this.formValid.set(status === 'VALID');
    });

    effect(() => {
      if (this.isLoading()) {
        this.contactForm.disable();
      } else {
        this.contactForm.enable();
      }
    });
  }

  onSubmit() {
    this.submitted.set(true);
    if (this.contactForm.invalid) return;
    this.isLoading.set(true);
    // console.log('Form Value:', this.contactForm.getRawValue());
    setTimeout(() => {
      this.isLoading.set(false);
      this.contactForm.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        subscribe: false
      });
      this.submitted.set(false);
      this.toast.success('Saved', 'Data stored successfully');
    }, 1500);
  }


  isInvalid(controlName: keyof typeof this.contactForm.controls) {
    const control = this.contactForm.controls[controlName];
    return ((control.dirty || control.touched) || this.submitted()) && control.invalid;
  }

  private prettyLabel(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // Error Message
  getError(controlName: keyof typeof this.contactForm.controls) {
    const control = this.contactForm.controls[controlName];
    if (!control || !control.errors) return null;

    const errors = control.errors;

    if (errors['required']) return `${this.prettyLabel(controlName)} is required.`;
    if (errors['minlength']) return `${this.prettyLabel(controlName)} must be at least ${errors['minlength'].requiredLength} charectors`;
    if (errors['email']) return `Please enter valid ${this.prettyLabel(controlName).toLowerCase()} address.`;

    return null;
  }
}
