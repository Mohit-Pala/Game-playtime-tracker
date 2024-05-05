import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

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

    sessionStorage.setItem('status', 'in')
    this.authService.update()
    this.authService.register({
      user: {uName: form.value.uname},
      password: form.value.password
    });
    this.router.navigate(['/']);
  }
}
