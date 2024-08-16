import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      emailLogin: ['', [Validators.required, Validators.email]],
      passwordLogin: ['', [Validators.required]],
    });
  }

  get emailLogin() {
    return this.formLogin.get('emailLogin');
  }
  get passwordLogin() {
    return this.formLogin.get('password');
  }

  onSubmitLogin() {
    // Stop if the form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    this.auth.login(
        this.formLogin.controls['emailLogin'].value,
        this.formLogin.controls['passwordLogin'].value
    )
    .then((user) => {
        console.log('user', user);

        // redirect to course page
        this.router.navigate(['course']);
    })
    .catch((e:any) => {
      this.error = 'failed to login';
      throw e;
    });
  }
}
