import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../../models/message.model';
import { UserDetails } from '../../models/user-details.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messageText: string;
  message: Message;
  filter: any;
  chattingWith: UserDetails;
  constructor(public chat: ChatService) { }

  ngOnInit(): void {
    this.chat.getMessage().subscribe(message => {
      this.chat.messages.push(message)
    })
    this.chat.chattingWith.subscribe(user => {
      this.chattingWith = user
      this.filter = { $or: [{from: user.id},{to: user.id}]
      }
    })
  }

  sendMessage() {
    this.message = {
      message: this.messageText,
      to: this.chattingWith.id,
      date: new Date()
    }
    this.messageText = ''
    this.chat.sendMessage(this.message)
  }

}
