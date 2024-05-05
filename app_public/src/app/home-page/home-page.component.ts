import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent implements OnInit{
  // placeholders, update later
  loggedIn: boolean = false // update on ng init
  username = ''
  numOfGames = 3
  totalHoursPlayed = this.numOfGames * 15

  constructor(
    private router: Router,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    const loggedStatus = sessionStorage.getItem('status');
    if (loggedStatus === 'in'){
      this.loggedIn = true
    }

    else {
      this.loggedIn = false
    }
  }

  navigateLogin() {
    this.router.navigate(['login']);
  }

  navigateSignup() {
    this.router.navigate(['register']);
  }

  navigateList() {
    this.router.navigate(['list']);
  }

  logout() {
    this.authService.reset()
    this.loggedIn = false
  }
}
