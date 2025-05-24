import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-layout',
  imports: [ ReactiveFormsModule, ToastModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss',
  providers: [MessageService]

})
export class LoginLayoutComponent {
  formLogin:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password:  new FormControl('', [Validators.required]),
  })

  constructor(private _loginService:LoginService, private Router:Router, private messageService: MessageService){}


  login() {
    if(this.formLogin.valid) {
      this._loginService.login(this.formLogin.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.statusCode == 200) {
          localStorage.setItem('token', response.token);
          this.Router.navigate(['../admin']);

          }
          else {
            alert(response.message);
                      this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });

          }

        },
        error: (err) => {
          alert(err.message);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: err.message });

        }
      })

    }
  }

}
