import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any;
  constructor(public chat: ChatService) { }

  ngOnInit(): void {
    this.chat.getUsers().subscribe(users => {
      console.log(users)
      this.users = users;
    })
  }

  openChat(event, user) {
    this.chat.chattingWith.next({
      name: user.value,
      id: user.key
    })
  }

}
