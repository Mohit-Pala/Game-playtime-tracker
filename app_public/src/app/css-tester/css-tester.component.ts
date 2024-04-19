import { Component } from '@angular/core';

@Component({
  selector: 'app-css-tester',
  templateUrl: './css-tester.component.html',
  styleUrl: './css-tester.component.css'
})
export class CssTesterComponent {
  file?: any
  base64Stuff?: String

  getImage(event: any) {
    this.file = event.target.files[0]
  }

  updateImage() {
    const reader = new FileReader()
    reader.readAsDataURL(this.file)

    reader.onloadend = () => {
      const base64String = reader.result as string
      console.log(base64String)
      this.base64Stuff = base64String
    }
  }
}
