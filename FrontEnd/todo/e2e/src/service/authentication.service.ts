import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password)
  {
    if(username === "" || password === "")
    {
      return false;
    }else{
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }
}
