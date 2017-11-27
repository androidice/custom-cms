import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean = false;
  constructor(private router: Router,  private userService: UserService){
    debugger;
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
      if(authenticated){
        this.router.navigateByUrl('/dashboard');
      }else {
        this.router.navigateByUrl('/');
      }
    });
  }

  title = 'app';

  ngOnInit(){
    debugger;
    this.userService.onAuthStateChanged().then(
      (user)=> {
        this.userService.setAuth(user);
      }
    )
  }
}
