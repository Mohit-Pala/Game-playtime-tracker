import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../models/user.model';
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL = "http://localhost:3000/api/user/";
  TOKEN_KEY = "token";

  user: User | null = null;
  userListerner: Subject<User | null> = new Subject();

  storageSub = new Subject<string>();

  constructor(private http: HttpClient) { }

  register({ user, password }: { user: User, password: string }) {
    this.http.post<{ token: string, user: User } | { error: any }>(this.API_URL + "register",
      {
        uName: user.uName,
        password
      })
      .subscribe((response) => {
        if ("error" in response) {
          console.log(response.error);
        }
        else {
          const token = response.token;
          localStorage.setItem(this.TOKEN_KEY, token);
          this.user = response.user;
          this.userListerner.next(this.user);
        }
      })
  }

  login({ uName, password }: { uName: string, password: string }) {
    this.http.post<{ token: string, user: User } | { error: any }>(this.API_URL + "login",
      {
        uName,
        password,
      })
      .subscribe((response) => {
        if ("error" in response) {
          console.log(response.error);
        }
        else {
          const token = response.token;
          localStorage.setItem(this.TOKEN_KEY, token);
          this.user = response.user;
          this.userListerner.next(this.user);
        }
      })
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  getUser(): User | null {
    return this.user;
  }

  getUserListener(): Observable<User | null> {
    return this.userListerner.asObservable();
  }

  autoLogIn(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      // JWT expiration date is in seconds
      const expirationDate = new Date(tokenPayload.exp)
      if (new Date().getTime() > expirationDate.getTime()) {
        this.retrieveUser(tokenPayload.email)
      }
    }
  }

  retrieveUser(uName: string): void {
    this.http.get<User | null>(this.API_URL + uName)
      .subscribe((user: User | null) => {
        if (user) {
          this.user = user
          this.userListerner.next(user)
        }
      });
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY)
    this.user = null
    this.userListerner.next(null)
  } 

  update() {
    this.storageSub.next('changed')
  }

  reset() {
    this.storageSub.next('')
    sessionStorage.clear()
  }

  watchStorageChanges() {
    return this.storageSub.asObservable()
  }
}