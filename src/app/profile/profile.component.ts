import { Component, OnInit, ViewContainerRef, ElementRef} from '@angular/core';
import { User, UploadService, UserService} from '../shared';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  data: any;
  user: User;
  imgSrc:string = '';
  change_avatar: boolean =false;

  constructor(private userService: UserService,
              private uploadService: UploadService,
              private el:ElementRef,
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
      .then((result)=> {
          if(result['status']){
            this.toastr.success('image successfully uploaded', 'Success');
            this.hideCropper();
            this.imgSrc = result['imgSrc']
          }else{
            this.toastr.error('image failed to uploaded', 'Error');
          }
      },(error)=> {
        this.toastr.error(error.message, 'Error');
      });
  }

  changeAvatar() {
   event.preventDefault();
   this.displayCropper();
  }

  hideCropper() {
    this.el.nativeElement.querySelector('.crop-container').style.display="none";
    this.el.nativeElement.querySelector('.croped-image').style.display="block";
  }

  displayCropper(){
    this.el.nativeElement.querySelector('.crop-container').style.display="block";
    this.el.nativeElement.querySelector('.croped-image').style.display="none";
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

  ngAfterViewInit() {
    this.hideCropper();
  }
}
