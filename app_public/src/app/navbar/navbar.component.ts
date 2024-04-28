import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router){}

  navbarRoutes = [
    {path:'/', name:'Home'},
    {path:'css', name: 'Css Tester'},
    {path:'add', name: 'Add Game'},
    {path:'list',name: 'List of Games'}
  ]

  navigate(path: String) {
    this.router.navigate([path]);
  }
}
