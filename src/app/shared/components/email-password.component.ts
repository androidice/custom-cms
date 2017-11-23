import { Component, Input } from '@angular/core';
import { User } from '../../shared';
import { UserService } from '../../shared'

@Component({
  selector: 'email-password',
  templateUrl: './email-password.component.html'
})
export class EmailPasswordComponent {

  constructor(private userService: UserService){}

  user:User = new User();
  @Input() transactionType: string;

  onSubmit(event) {
    event.preventDefault();
    if(this.transactionType.toLowerCase() ==='signup'){
      this.userService.register(this.user)
    }
    else if (this.transactionType.toLowerCase() === 'signin'){
      this.userService.login(this.user);
    }
  }
  ngOnInit() {

  }
}
