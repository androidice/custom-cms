import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/services/register.service';

import { User } from '../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private registerService: RegisterService) { }

  onSubmit(event){
    event.preventDefault();
    this.registerService.register(this.user)
    .then((result)=> {
        alert('user created');
    }, (error)=>{
       alert(error.message);
    });
  }

  ngOnInit() {

  }

}
