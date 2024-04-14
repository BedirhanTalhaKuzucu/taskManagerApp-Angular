import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewChecked {
  currentUrl = '';
  buttonBackgroun: string = 'red';

  constructor(private router: Router) {}

  ngAfterViewChecked(): void {
    if (this.currentUrl !== this.router.url) {
      this.currentUrl = this.router.url;
      this.buttonBackgroun = this.currentUrl === '/tasklist' ? 'red' : 'purple';
    }
  }

  buttonClick() {
    let navlink = this.router.url === '/tasklist' ? '/' : '/tasklist';
    this.currentUrl = navlink;
    this.buttonBackgroun = this.currentUrl === '/tasklist' ? 'red' : 'purple';
    this.router.navigate([navlink]);
  }
}
