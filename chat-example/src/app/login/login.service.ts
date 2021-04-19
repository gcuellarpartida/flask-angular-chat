import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details.model';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: UserDetails;
  isAuthenticated = false;

  constructor(private socket: Socket) { }

  login(user: UserDetails) {
    this.user = user;
    this.isAuthenticated = !this.isAuthenticated;
    this.socket.emit('sign_in', this.user);
  }
}
