import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@angular/router';
import { ButtonModule, ButtonSeverity } from 'primeng/button';

@Component({
  template: `<p-button
    [raised]="raised"
    [rounded]="rounded"
    [label]="buttonText"
    [severity]="type"
    [icon]="icon"
    [styleClass]="class"
    [variant]="varient"
    (click)="clickButton($event)"
    [size]="size"
  />`,
  styles: [],
  selector: 'custom-button',
  imports: [ButtonModule],
})
export class CustomButton {
  @Input() buttonText = 'Custom Button';
  @Input() raised = true;
  @Input() rounded = true;
  @Input() icon = 'pi pi-plus';
  @Input() type: ButtonSeverity = 'primary';
  @Input() class = '';
  @Input() varient: 'outlined' | 'text' | undefined = undefined;
  @Input() size: 'small' | 'large' | undefined = 'small';

  @Output('handClick') eventEmitter = new EventEmitter<MouseEvent>();

  clickButton(event: MouseEvent) {
    console.log(event);

    this.eventEmitter.emit(event);
  }
}
