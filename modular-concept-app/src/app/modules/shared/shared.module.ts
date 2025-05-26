import { NgModule } from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import { UserModule } from '../user/user.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlayerComponent],
  imports: [],
  exports: [PlayerComponent],
  providers: [],
})
export class SharedModule {}
//
