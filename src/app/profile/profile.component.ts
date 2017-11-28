import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {
  data: any;

  constructor(){
    this.data = {};
  }

  onSubmit(event){
    event.preventDefault();
    console.log('data', this.data);
  }
}
