import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services';

import { User } from '../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  onSubmit(event){
    event.preventDefault();
    this.userService.register(this.user)
    .then((user)=> {
        this.userService.setAuth(user)
    }, (error)=>{
       alert(error.message);
    });
  }

  ngOnInit() {

  }

}
