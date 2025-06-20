import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../../guards/user-form.gaurd';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements CanComponentDeactivate {
  userForm = {
    name: '',
    email: '',
  };

  canDeactivate() {
    if (this.userForm.name.trim() === '') {
      return confirm('You have unsaved changes. Do you want to leave ?');
    }
    if (this.userForm.email.trim() === '') {
      return confirm('You have unsaved changes. Do you want to leave ?');
    }
    //component deactivate ho bhi sakta hia ki nhi.
    return true;
  }
}
