import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  newUser: any = {
    name: '',
    username: '',
    email: '',
    adress: {
      street: '',
      city: ''
    },
    zipCode: '',
    phone: '',
    website: ''
  };

  constructor(private service: UsersService) {  }

  submitForm(user: any): void {
    if (user.control.status === 'VALID') {
      this.service.newUser(this.newUser);
    } else {
      console.log(user);
    }
  }

}
