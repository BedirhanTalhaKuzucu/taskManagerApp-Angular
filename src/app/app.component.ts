import { Component, OnInit } from '@angular/core';
import { TasklistService } from './core/services/tasklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  navButton = '';

  constructor(public service: TasklistService, private router: Router) {}

  ngOnInit(): void {}
}
