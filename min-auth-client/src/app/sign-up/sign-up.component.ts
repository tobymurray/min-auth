import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from './../shared/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  private form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = formBuilder.group({
      "username": ["", Validators.required],
      "email": ["", Validators.required],
      "passwords": formBuilder.group({
        password: ["", Validators.required],
        repeatPassword: ["", Validators.required]
      }, { validator: this.passwordMatchValidator })
    });
  }

  onSignUp() {
    let formContents = this.form.value;
    this.userService.create(formContents.username, formContents.email, formContents.passwords.password)
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password').value === group.get('repeatPassword').value
      ? null : { 'mismatch': true };
  }

}
