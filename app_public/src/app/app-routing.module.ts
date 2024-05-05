import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CssTesterComponent } from './css-tester/css-tester.component';
import { AddNewGameComponent } from './components-game/add-new-game/add-new-game.component';
import { ListGamesComponent } from './components-game/list-games/list-games.component';
import { GameComponent } from './components-game/game/game.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'css', component:CssTesterComponent},
  {path: 'add', component:AddNewGameComponent},
  {path: 'list', component:ListGamesComponent},
  {path: 'game/:id', component:GameComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'nav', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
