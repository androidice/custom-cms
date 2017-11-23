import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services';

import { User } from '../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  
  ngOnInit() {

  }

}
