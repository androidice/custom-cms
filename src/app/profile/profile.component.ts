import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { User, UploadService, UserService} from '../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {
  data: any;
  user: User;
  imgSrc:string = '';

  constructor(private userService: UserService,
              private uploadService: UploadService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
    this.user = new User();
    this.data = {
      image: ''
    };
  }

  onSubmit(event){
    event.preventDefault();
    this.uploadService.uploadProfileImage(this.user, this.data.image)
      .then(()=> {
          this.toastr.success('image successfully uploaded', 'Success');
      },(error)=> {
        this.toastr.error(error.message, 'Error');
      });
  }


  ngOnInit() {
      this.userService.onAuthStateChanged()
      .then((currentUser)=>{
        this.user = currentUser;
        this.uploadService.getProfileImage(this.user)
        .then((result)=>{
          this.imgSrc = result['imgSrc'];
        });
      })
  }

}
