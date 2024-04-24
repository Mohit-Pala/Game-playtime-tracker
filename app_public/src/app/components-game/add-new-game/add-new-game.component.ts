import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-new-game',
  templateUrl: './add-new-game.component.html',
  styleUrl: './add-new-game.component.css'
})
export class AddNewGameComponent {
  iconSrc?:any
  bannerSrc?:any
  saveFileSrc?:any

  base64Icon?:string
  base64Banner?:string
  base64SaveFile?:string

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

  onSubmit(form: Form) {
    console.log(form)
  }
}
