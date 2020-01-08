import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.username === "" || this.password === "")
    {
      this.invalidLogin = true
    }else
    {
      this.router.navigate(['welcome', this.username])
    }
  }
}
