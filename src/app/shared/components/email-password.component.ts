import { Component, Input, ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from '../../shared';
import { UserService } from '../../shared'

@Component({
  selector: 'email-password',
  templateUrl: './email-password.component.html'
})
export class EmailPasswordComponent {

  constructor(private userService: UserService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
  }

  user:User = new User();
  @Input()
  transaction: string;

  onSubmit(event, form) {
    debugger;
    event.preventDefault();
    if(this.transaction.toLowerCase() ==='signup'){
      this.userService.register(this.user)
      .then((user)=> {
        this.toastr.success('user has been successfully created', 'Success');
        this.userService.setAuth(user);
      }, (error) => {
        this.toastr.error(error.message, 'Error');
      });
    }
    else if (this.transaction.toLowerCase() === 'signin'){
      this.userService.login(this.user)
      .then((user) => {
          this.toastr.success('user has been successfully login', 'Success');
          this.userService.setAuth(user);
      }, (error)=> {
          this.toastr.error(error.message, 'Error');
      });
    }
  }


  ngOnInit() {

  }
}
