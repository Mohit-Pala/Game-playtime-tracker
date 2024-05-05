import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  ngOnInit() {
    this.authService.getUserListener().subscribe(
      (user) => {
        if (user !== null) {
          this.router.navigate(['/']);
        }
      }
    )
  }

  submitForm(form: NgForm) {
    sessionStorage.setItem('status', 'in')
    this.authService.update()
    this.authService.login({
      uName: form.value.uname,
      password: form.value.password
    })
    this.router.navigate(['/list']);
  }

  constructor( private authService: AuthService, private router: Router) {}
}