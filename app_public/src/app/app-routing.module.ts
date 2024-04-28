import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CssTesterComponent } from './css-tester/css-tester.component';
import { AddNewGameComponent } from './components-game/add-new-game/add-new-game.component';
import { ListGamesComponent } from './components-game/list-games/list-games.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'css', component:CssTesterComponent},
  {path: 'add', component:AddNewGameComponent},
  {path: 'list', component:ListGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
