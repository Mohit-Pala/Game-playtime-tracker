import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  // placeholders, update later
  loggedIn: boolean = false // update on ng init
  username = 'username'
  numOfGames = 3
  totalHoursPlayed = this.numOfGames * 15

  constructor(private router: Router) {}

  navigateLogin() {
    this.router.navigate(['login']);
  }

  navigateSignup() {
    this.router.navigate(['register']);
  }
}
