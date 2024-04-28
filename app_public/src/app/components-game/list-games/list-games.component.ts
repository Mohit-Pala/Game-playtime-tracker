import { Component, OnInit } from '@angular/core';
import GameService from '../../services/game.service';
import Game from '../../models/game.model';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent implements OnInit {
  listOfGames: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGameListener().subscribe((games: Game[]) => {
      this.listOfGames = games;
    });
    this.gameService.getGames();
  }
}