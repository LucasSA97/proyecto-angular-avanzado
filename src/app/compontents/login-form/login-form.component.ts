import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>()

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })

  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  //Submit Login

  submitLogin() {
    if (this.loginForm.valid) {
      //console.table(this.loginForm.value);
      //TO DO: Peticion a AuthService
      this.loginAction.emit(this.loginForm.value)
      //this.loginForm.reset()
    }
  }

}
