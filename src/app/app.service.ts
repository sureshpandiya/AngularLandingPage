import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private message = new BehaviorSubject<boolean>(true);
  getMessage = this.message.asObservable();
 
  constructor() {}

  setMessage(message: boolean) {
    this.message.next(message)
  }
}
