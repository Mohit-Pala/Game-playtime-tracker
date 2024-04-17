import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-new-game',
  templateUrl: './add-new-game.component.html',
  styleUrl: './add-new-game.component.css'
})
export class AddNewGameComponent {

  iconSrc?: File
  bannerSrc?:File
  iconPreview = "../../../favicon.ico"
  bannerPreview = "../../../favicon.ico"

  onSubmit(form: Form) {
    console.log(form)
  }
}
