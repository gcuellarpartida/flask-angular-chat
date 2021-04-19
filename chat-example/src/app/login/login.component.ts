import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    name: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private as: LoginService, private router: Router) {

  }

  onSubmit(): void {
    this.as.login(this.loginForm.value)
    this.router.navigateByUrl('/chat');
  }
}

