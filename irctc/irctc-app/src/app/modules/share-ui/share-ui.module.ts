import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importing ButtonModule from PrimeNG
import { PanelMenuModule } from 'primeng/panelmenu';
import { DrawerModule } from 'primeng/drawer';
@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, PanelMenuModule, DrawerModule],
  exports: [ButtonModule, PanelMenuModule, DrawerModule], // Exporting CommonModule and ButtonModule for use in other modules
})
export class ShareUiModule {}
