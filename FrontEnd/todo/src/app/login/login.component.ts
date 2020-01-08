import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.username === "" || this.password === "")
    {
      this.invalidLogin = true
    }else
    {
      this.invalidLogin = false
    }
  }
}
