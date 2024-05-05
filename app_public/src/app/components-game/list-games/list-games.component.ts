import { Component, OnInit } from '@angular/core';
import GameService from '../../services/game.service';
import Game from '../../models/game.model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent implements OnInit {
  totalGames = 0
  totalPlaytime = 0
  showMessage = false
  listOfGames: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGameListener().subscribe((games: Game[]) => {
      this.listOfGames = games;
      if(games.length <= 0) {
        this.showMessage = true
        localStorage.setItem('numGames', JSON.stringify(0))
        localStorage.setItem('totalPlaytime', JSON.stringify(0))
      }
      
      games.forEach(element => {
        this.totalGames += 1
        this.totalPlaytime += element.playtime
        localStorage.setItem('numGames', JSON.stringify(this.totalGames))
        localStorage.setItem('totalPlaytime', JSON.stringify(this.totalPlaytime))

      });
    });
    this.gameService.getGames();
  }
}