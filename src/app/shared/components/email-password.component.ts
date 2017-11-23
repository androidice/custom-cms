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
  @Input()
  transaction: string;

  onSubmit(event) {
    event.preventDefault();
    if(this.transaction.toLowerCase() ==='signup'){
      this.userService.register(this.user)
      .then((user)=> {
        this.userService.setAuth(user);
        alert('user created');
      }, (error) => {
        alert('error');
      });
    }
    else if (this.transaction.toLowerCase() === 'signin'){
      this.userService.login(this.user)
      .then((user) => {
          this.userService.setAuth(user);
          alert('user login');
      }, (error)=> {
          alert('error');
      });
    }
  }

  
  ngOnInit() {

  }
}
