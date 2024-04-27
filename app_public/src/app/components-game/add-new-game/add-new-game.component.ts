import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import GameService from '../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-game',
  templateUrl: './add-new-game.component.html',
  styleUrl: './add-new-game.component.css'
})
export class AddNewGameComponent {
  iconSrc?: any
  bannerSrc?: any
  saveFileSrc?: any

  base64Icon?: string
  base64Banner?: string
  base64SaveFile?: string

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  getIcon(event: any) {
    this.iconSrc = event.target.files[0]
  }

  getBanner(event: any) {
    this.bannerSrc = event.target.files[0]
  }

  getSaveFile(event: any) {
    this.saveFileSrc = event.target.files[0]
  }

  updateIcon() {
    const reader = new FileReader()
    reader.readAsDataURL(this.iconSrc)
    reader.onloadend = () => {
      const base64String = reader.result as string
      this.base64Icon = base64String
    }
  }

  updateBanner() {
    const reader = new FileReader()
    reader.readAsDataURL(this.bannerSrc)
    reader.onloadend = () => {
      const base64String = reader.result as string
      this.base64Banner = base64String
    }
  }

  updateSavefile() {
    const reader = new FileReader()
    reader.readAsDataURL(this.saveFileSrc)
    reader.onloadend = () => {
      const base64String = reader.result as string
      this.base64SaveFile = base64String
    }
  }

  updateAll() {
    this.updateIcon()
    this.updateBanner()
    this.updateSavefile()
  }

  onSubmit(form: NgForm) {
    console.log(form)

    if (this.base64Icon == undefined) {
      this.base64Icon = ''
    }

    if (this.base64Banner === undefined) {
      this.base64Banner = ''
    }

    if (this.base64SaveFile === undefined) {
      this.base64SaveFile = ''
    }

    console.log(this.base64Icon)
    console.log(this.base64Banner)
    console.log(this.base64SaveFile)

    this.gameService.addGame({
      id: '',
      name: form.value.gameName,
      playtime: form.value.playtime,
      rating: form.value.rating,
      icon: this.base64Icon,
      banner: this.base64Banner,
      saveFile: this.base64SaveFile
    });
    this.router.navigate(['/']);
  }
}
