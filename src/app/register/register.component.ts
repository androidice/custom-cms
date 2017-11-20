import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

import { User } from '../../models/user';

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
        console.log(result);
    }, (error)=>{
        console.log(error);
    });
  }

  ngOnInit() {

  }

}
