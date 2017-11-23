import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private UserService: UserService){}
  title = 'app';

  ngOnInit(){
    this.UserService.onAuthStateChanged().then(
      (user)=> {
        this.UserService.setAuth(user);
      }
    )
  }
}
