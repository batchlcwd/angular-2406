import { NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserProfileComponent, UserButtonComponent],
  exports: [UserButtonComponent],
  imports: [],
  providers: [UserService],
})
export class UserModule {}
