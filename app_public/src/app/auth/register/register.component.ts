import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.authService.getUserListener().subscribe(
      (user) => {
        if (user !== null) {
            this.router.navigate(['/']);
        }
      })
  }

  submitForm(form: NgForm) {
    this.authService.register({
      user: {uName: form.value.uname},
      password: form.value.password
    });
  }
}
