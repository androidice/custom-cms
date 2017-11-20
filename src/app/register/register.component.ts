import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private registerService: RegisterService) { }

  onSubmit(event){
    event.preventDefault();
    console.log('submitted', this.user);
    this.registerService.register("");
  }

  ngOnInit() {
    this.user = new User()
    //this.registerService.register({});
  }

}
