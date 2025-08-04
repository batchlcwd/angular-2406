import { EventEmitter, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmMessageService {
  constructor(private ngConfirmation: ConfirmationService) {}

  show(
    message: string,
    header: string = 'Confirm',
    acceptButtonText = 'Save',
    icon: string = 'pi pi-exclamation-triangle'
  ) {
    const responseSubject = new Subject<boolean>();

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
      accept: () => {
        responseSubject.next(true);
        responseSubject.complete();
      },
      reject: () => () => {
        responseSubject.next(false);
        responseSubject.complete();
      },
    });

    return responseSubject.asObservable();
  }

  // onConfirm() {
  //   return this.responseSubject.asObservable();
  // }
}
