import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// material stuff
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CssTesterComponent } from './css-tester/css-tester.component';
import { AddNewGameComponent } from './components-game/add-new-game/add-new-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CssTesterComponent,
    AddNewGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
