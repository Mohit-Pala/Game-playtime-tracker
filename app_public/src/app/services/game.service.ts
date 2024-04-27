import { HttpClient } from "@angular/common/http";
import Game, { IGame } from "../models/game.model";
import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export default class GameService {

  API_URL = "http://localhost:3000/api/";

  private games: Game[] = [];
  private gameListener: Subject<Game[]> = new Subject();

  private currentGame: Game | undefined;
  private currentGameListener: Subject<Game | undefined> = new Subject();

  constructor(private http: HttpClient) { }

  addGame(game: Game) {
    this.http.post<IGame>(this.API_URL + "game", game).subscribe((igame: IGame) => {
      this.games.push({
        id: igame._id,
        name: igame.name,
        playtime: igame.playtime,
        rating: igame.rating,
        icon: igame.icon,
        banner: igame.banner,
        saveFile: igame.saveFile
      })
      this.gameListener.next([...this.games]);
    })
  }

  getGames(): void {
    this.http.get<IGame[]>(this.API_URL + "cat").subscribe((igames: IGame[]) => {
      this.games = [];
      igames.forEach((igame: IGame) => {
        this.games.push({
          id: igame._id,
          name: igame.name,
          playtime: igame.playtime,
          rating: igame.rating,
          icon: igame.icon,
          banner: igame.banner,
          saveFile: igame.saveFile
        })
      });
      this.gameListener.next(this.games);
    })
  }

  getGame(id: string) {
    this.http.get<{ game?: IGame, message: string }>(this.API_URL + "game/" + id)
      .subscribe((res: { game?: IGame, message: string }) => {
        if (res.game) {
          this.currentGame = {
            id: res.game._id,
            name: res.game.name,
            playtime: res.game.playtime,
            rating: res.game.rating,
            icon: res.game.icon,
            banner: res.game.banner,
            saveFile: res.game.saveFile
          }
        }
        else {
          this.currentGame = undefined;
        }
        this.currentGameListener.next(this.currentGame);
      })
  }

  editGame(game: Game) {
    this.http.put<{ message: string }>(this.API_URL + 'game/' + game.id, game)
      .subscribe((res: { message: string }) => {
        if (res.message === "success") {
          this.currentGame = game;
        }
        else {
          this.currentGame = undefined;
        }
        this.currentGameListener.next(this.currentGame);
      })
  }

  deleteGame(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.API_URL + 'game/' + id);
  }

  getCurrentCat(): Game | undefined {
    return this.currentGame;
  }

  getCurrentCatListener(): Observable<Game | undefined> {
    return this.currentGameListener.asObservable();
  }

  getCatListener(): Observable<Game[]> {
    return this.gameListener.asObservable();
  }
}
