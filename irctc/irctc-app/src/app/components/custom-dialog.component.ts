import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'custom-dialog',
  template: `
    <p-dialog
      [modal]="true"
      [(visible)]="visible"
      [closable]="closable"
      [style]="{
        width: width,
        height: height
      }"
      [dismissableMask]="dismissableMask"
      (onHide)="closeDialog()"
      [header]="header"
    >
      <ng-content> </ng-content>
    </p-dialog>
  `,
  styles: [``],
  imports: [DialogModule],
})
export class CustomDialogComponent {
  @Input() visible: boolean = false;
  @Input() header: string = 'Custom Dialog';
  @Input() footer: string = '';
  @Input() width: string = '40vw';
  @Input() height: string = 'auto';
  @Input() closable: boolean = true;
  @Input() dismissableMask: boolean = true;

  @Output() visibleChange = new EventEmitter<boolean>();

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
