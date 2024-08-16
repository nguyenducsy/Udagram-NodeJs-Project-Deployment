import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  formSingin!: FormGroup;
  submitted = false;
  error = '';

constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.formSingin = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      emailSignin: ['', [Validators.required, Validators.email]],
      passwordSignin: ['', [Validators.required]],
    });
  }

  get emailSignin() {
    return this.formSingin.get('emailSignin');
  }

  get passwordSignin() {
    return this.formSingin.get('passwordSignin');
  }
  
  get userName() {
    return this.formSingin.get('userName');
  }

  onSubmitSigni() {
    // Stop if the form is invalid
    if (this.formSingin.invalid) {
      return;
    }

    const element = document.getElementById('main') as HTMLElement;
    element.style.display = 'none';

    //this.userInfo.emit(this.form.value);
  }

  onSubmitSignin() {

    if (this.formSingin.invalid) {
      return;
    }

    const newuser: User = {
      email: this.formSingin.controls['emailSignin'].value,
      name: this.formSingin.controls['userName'].value
    };

    this.auth.register(newuser, this.formSingin.controls['passwordSignin'].value)
              .then((user) => {

                this.router.navigate(['course']);
            
              })
             .catch((e) => {
              this.error = e.statusText;
              throw e;
             });
  }
}
