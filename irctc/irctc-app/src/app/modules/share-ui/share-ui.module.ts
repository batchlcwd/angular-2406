import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importing ButtonModule from PrimeNG
import { PanelMenuModule } from 'primeng/panelmenu';
import { DrawerModule } from 'primeng/drawer';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    PanelMenuModule,
    DrawerModule,
    CardModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    PanelMenuModule,
    DrawerModule,
    CardModule,
    TableModule,
  ], // Exporting CommonModule and ButtonModule for use in other modules
})
export class ShareUiModule {}
