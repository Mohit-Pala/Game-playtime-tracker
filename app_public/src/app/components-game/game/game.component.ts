import { Component, OnInit } from "@angular/core";
import Game from "../../models/game.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import GameService from "../../services/game.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  game: Game | undefined
  editMode: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getCurrentGameListener().subscribe((game: Game | undefined) => {
      if (!game) {
        this.router.navigate(['/list'])
      }
      this.game = game
    })
    this.gameService.getGame(this.route.snapshot.params["id"]);
  }

  updateGame(form: NgForm) {
    this.gameService.editGame(this.game!)
  }

  deleteGame() {
    this.gameService.deleteGame(this.game!.id)
      .subscribe((res: { message: string }) => {
        this.router.navigate(['/list'])
      })
  }

  back() {
    this.router.navigate(['list'])
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode
  }


}