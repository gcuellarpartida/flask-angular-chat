import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginService } from './login/login.service';
import { ChatService } from './chat/chat.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './chat/messages/messages.component';
import { UsersListComponent } from './chat/users-list/users-list.component';
import { LoginComponent } from './login/login.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { environment } from '../environments/environment';
import { FilterPipeModule } from 'ngx-filter-pipe';

const config: SocketIoConfig = { url: environment.url, options: {} };


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessagesComponent,
    UsersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [LoginService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
