import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importing ButtonModule from PrimeNG
import { PanelMenuModule } from 'primeng/panelmenu';
import { DrawerModule } from 'primeng/drawer';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CustomButton } from '../../components/custom-button.component';
import { FloatLabel } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelMenuModule,
    DrawerModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    ConfirmDialogModule,
    ToastModule,
    CustomButton,
    MessageModule,
    FloatLabel,
    SelectModule,
    DatePickerModule,
  ],
  exports: [
    ButtonModule,
    PanelMenuModule,
    DrawerModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    ConfirmDialogModule,
    ToastModule,
    CustomButton,
    FloatLabel,
    SelectModule,
    DatePickerModule,
    MessageModule,
  ], // Exporting CommonModule and ButtonModule for use in other modules
})
export class ShareUiModule {}
