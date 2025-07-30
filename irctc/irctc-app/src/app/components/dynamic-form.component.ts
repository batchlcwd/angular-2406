import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Button } from 'primeng/button';

@Component({
  selector: 'dynamic-form',
  template: `
    <form class="mt-5" [formGroup]="form" (ngSubmit)="onSubmit()">
      <div *ngFor="let field of fields" class="mb-2">
        <!-- text -->
        @if(field.type=="text"){
        <label for="field.name">{{ field.label }}</label>
        <input
          type="text"
          pInputText
          class="w-full"
          [name]="field.name"
          [formControlName]="field.name"
          [placeholder]="field.placeholder"
          [id]="field.name"
        />
        }

        <!-- number -->
        @if(field.type=='number'){
        <label for="field.name">{{ field.label }}</label>
        <input
          type="number"
          pInputText
          class="w-full mt-2"
          [name]="field.name"
          [formControlName]="field.name"
          [placeholder]="field.placeholder"
          [id]="field.name"
        />
        }

        <!-- email -->
        @if(field.type=='email'){
        <label for="field.name">{{ field.label }}</label>
        <input
          type="email"
          pInputText
          class="w-full mt-2"
          [name]="field.name"
          [formControlName]="field.name"
          [placeholder]="field.placeholder"
          [id]="field.name"
        />
        }

        <!-- password -->
        @if(field.type=='password'){
        <label for="field.name">{{ field.label }}</label>
        <input
          type="password"
          pInputText
          class="w-full mt-2"
          [name]="field.name"
          [formControlName]="field.name"
          [placeholder]="field.placeholder"
          [id]="field.name"
        />
        }

        <!-- dropdown -->
        @if(field.type=='dropdown'){
        <label for="field.name">{{ field.label }}</label>
        <p-select
          class="w-full mt-2"
          [name]="field.name"
          [options]="field.options"
          [formControlName]="field.name"
          [placeholder]="field.placeholder"
          [id]="field.name"
        ></p-select>
        }
      </div>
      <div *ngIf="form.touched && form.invalid" class="text-red-500 text-center mt-5">
        Please fill out all required fields.
      </div>

      <div *ngIf="fields.length > 0" class="flex  justify-center ">
        <p-button
          type="submit"
          label="Submit"
          class=" mt-3"
          [disabled]="form.invalid"
        >
        </p-button>
      </div>
    </form>
  `,
  styles: [''],
  imports: [
    ReactiveFormsModule,
    NgFor,
    InputTextModule,
    SelectModule,
    NgIf,
    Button,
  ],
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: any[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    let group: any = {};

    this.fields.forEach((field) => {
      group[field.name] = [
        field.value || '',
        field.required ? Validators.required : null,
      ];
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
