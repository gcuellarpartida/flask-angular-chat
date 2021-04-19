import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details.model';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: UserDetails;
  messages: Message[] = [];
  chattingWith = new Subject<UserDetails>();

  constructor(private socket: Socket) {}

  sendMessage(message: Message) {
    this.socket.emit('message', message);
  }

  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data: any) => data))
  }

  getUsers() {
    return this.socket.fromEvent('current_users').pipe(map((data: any) => data))
  }


}
