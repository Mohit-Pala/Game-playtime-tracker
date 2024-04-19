import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000/api/'
  KEY = 'token'

  user: User | null = null;
  userListenrer: Subject<User | null> = new Subject()


  constructor(private http: HttpClient) { }

  register({ user, password }: { user: User, password: string }) {
    this.http.post<{token: string} | {error: any}>(this.API_URL + 'register',
      {
        username: user.username,
        password
      }
    )
    .subscribe((response) => {
      if('error' in response){
        console.log(response.error)
      }
      else {
        const token = response.token;
        localStorage.setItem(this.KEY, token)
        this.user = user
        this.userListenrer.next(this.user);
      }
    })
  }

  login({ username, password }: { username: string, password: string }) {
    
  }
}
