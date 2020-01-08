import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'manastomni'
  password = ''
  errorMessage = "Invalid Login"
  invalidLogin = false

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.authentication.authenticate(this.username, this.password))
    {
      this.router.navigate(['welcome', this.username])
    }else
    {
      this.invalidLogin = true
    }
  }

}
