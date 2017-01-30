import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  private form: FormGroup;

   constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
  }

  onSignIn(email, password) {
    console.log(this.form);
  }

}
