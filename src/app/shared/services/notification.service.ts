import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from 'primeng/primeng';

@Injectable()
export class NotificationService {

  public toasterStatus: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);

  //type: success, info, warn, error
  showToaster(type:string, header:string, content:string) {
      let toasterObj: Message = { severity: type, summary: header, detail: content };
      this.toasterStatus.next(toasterObj);
  }

  hideToaster() {
    this.toasterStatus.next(null);
  }
}
