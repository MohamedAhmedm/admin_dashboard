import { Component, OnInit } from '@angular/core';
//import formgroup and formcontrol and validators
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    //navigate to dashboard
    // console.log(this.loginForm.value);

    this.router.navigate(['/dashboard']);
    if (this.loginForm.valid) {
    // this.router.navigate(['/dashboard']);

    } else {
      console.log('form is invalid');
      return;
    }
  }
}
