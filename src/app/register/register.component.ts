import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, NotificationService } from  '../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from '../shared/models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {
  this.toastr.setRootViewContainerRef(vcr);
  }

  user: User = new User();

  onSubmit(event, form) {
    event.preventDefault();
    debugger;
    this.userService.register(this.user)
    .then((user)=> {
      //this.toastr.success('user has been successfully created', 'Success');
      this.notificationService.showToaster('success', 'Success', 'user has been successfully created');
      this.userService.setAuth(user);
      this.router.navigateByUrl('/dashboard');
    }, (error) => {
    //  this.toastr.error(error.message, 'Error');
    this.notificationService.showToaster('error', 'Error', error.message);
    });
  }
  ngOnInit() {

  }

}
