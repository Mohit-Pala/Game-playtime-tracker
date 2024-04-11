import { Component } from '@angular/core';

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
}
