import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  onSubmit(event){
    event.preventDefault();
    console.log('submitted', event);
  }

  ngOnInit() {
    this.registerService.register({});
  }

}
