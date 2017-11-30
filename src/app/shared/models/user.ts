export class User {
  email: string = '';
  password: string = '';
  displayName:string = '';
  emailVerified:boolean = false;
  isAnonymous:boolean = false;
  providerData: object = {};
  refreshToken: string = '';
  profile:object = {
    image: {
      path: '',
      filenae: '',
      imgUrl: ''
    }
  };
  uid: string = '';
}
