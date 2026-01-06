import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast-service';

describe('ToastService', () => {
  let service: ToastService;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['add', 'clear']);

    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: MessageService, useValue: messageServiceSpy }
      ]
    });

    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call add with success severity', () => {
    service.success('Success', 'Saved successfully');

    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Saved successfully',
      life: 4000
    });
  });

  it('should call add with error severity', () => {
    service.error('Error', 'Something went wrong');

    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong',
      life: 4000
    });
  });

  it('should call add with info severity', () => {
    service.info('Info', 'This is info');

    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'info',
      summary: 'Info',
      detail: 'This is info',
      life: 4000
    });
  });

  it('should call add with warn severity', () => {
    service.warn('Warning', 'Be careful');

    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'warn',
      summary: 'Warning',
      detail: 'Be careful',
      life: 4000
    });
  });

  it('should clear messages', () => {
    service.clear();

    expect(messageServiceSpy.clear).toHaveBeenCalled();
  });
});
