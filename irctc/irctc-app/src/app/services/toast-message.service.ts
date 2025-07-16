import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  constructor(private ngToast: MessageService) {}
  success(message: string) {
    this.ngToast.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  error(message: string) {
    this.ngToast.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
}
