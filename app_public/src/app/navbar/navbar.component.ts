import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('status') === 'in') {
      this.loggedIn = true;
    }

    this.authService.watchStorageChanges().subscribe((status: string) => {
      if(status === 'changed') {
        this.loggedIn = true
      }

      else{
        this.loggedIn = false
      }
    })
  }


  navbarRoutesIN = [
    { path: '/', name: 'Home' },
    { path: 'add', name: 'Add Game' },
    { path: 'list', name: 'List of Games' }
  ]

  navbarRoutes = [
    { path: '/', name: 'Home' }
  ]

  navigate(path: String) {
    this.router.navigate([path]);
  }

  update() {
    if(sessionStorage.getItem('status') === 'in') {
      this.loggedIn = true;
    }
  }
}
