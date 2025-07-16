import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmMessageService {
  private responseSubject = new Subject<boolean>();

  constructor(private ngConfirmation: ConfirmationService) {}

  show(
    message: string,
    header: string = 'Confirm',
    acceptButtonText = 'Save',
    icon: string = 'pi pi-exclamation-triangle'
  ) {
    this.ngConfirmation.confirm({
      message,
      header,
      icon,
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      closable: true,
      closeOnEscape: true,
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: acceptButtonText,
        severity: 'danger',
      },
      accept: () => this.responseSubject.next(true),
      reject: () => this.responseSubject.next(false),
    });
  }

  onConfirm() {
    return this.responseSubject.asObservable();
  }
}
