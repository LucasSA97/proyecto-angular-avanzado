import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  email: string = "";
  password: string = "";

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['dashboard'])
    }
  }
  
  loginUser(value: any) { 
    
    let { email, password } = value;

    this.authServices.login(email, password).subscribe(
      (response) => {
        if (response.token) {
        sessionStorage.setItem('token', response.token)
        this.router.navigate(['dashboard'])
        }        
      },
      (error) => console.error(`Hubo un error: ${error}`),
      ()=> console.info('Peticion terminada')
  )
  }

}
