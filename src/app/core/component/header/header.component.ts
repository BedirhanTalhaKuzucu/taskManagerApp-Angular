import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  currentUrl = '';
  buttonBackgroun: string = 'red';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.currentUrl = this.router.url;
    this.buttonBackgroun = this.currentUrl === '/tasklist' ? 'red' : 'purple';
  }

  buttonClick() {
    let navlink = this.router.url === '/' ? '/tasklist' : '/';
    this.currentUrl = navlink;
    this.buttonBackgroun = this.currentUrl === '/tasklist' ? 'red' : 'purple';
    this.router.navigate([navlink]);
  }
}
