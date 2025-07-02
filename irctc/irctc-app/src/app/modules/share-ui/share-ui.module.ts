import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'; // Importing ButtonModule from PrimeNG

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonModule], // Exporting CommonModule and ButtonModule for use in other modules
})
export class ShareUiModule {}
