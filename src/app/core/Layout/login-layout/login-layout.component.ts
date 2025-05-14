import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-layout',
  imports: [ ReactiveFormsModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  formLogin:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password:  new FormControl('', [Validators.required]),
  })

  constructor(private _loginService:LoginService, private Router:Router){}


  login() {
    console.log(this.formLogin);
    if(this.formLogin.valid) {
      this._loginService.login(this.formLogin.value).subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);

          this.Router.navigate(['../admin']);

        },
        error: (err) => {
          console.log(err.message);

        }
      })

    }
  }
}
