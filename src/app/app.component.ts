import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, NotificationService } from './shared';

import { Message } from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 objToaster: Message[];

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService){
       this.objToaster = [];
  }

  title = 'app';

  ngOnInit(){
    this.userService.onAuthStateChanged().then((user)=>{
      this.userService.setAuth(user)
    })
  }

  ngAfterViewInit() {
    debugger;
    this.notificationService.toasterStatus.subscribe((message: Message) => {
      if(message) {
        this.objToaster.push(message);
      }
    });
  }
}
