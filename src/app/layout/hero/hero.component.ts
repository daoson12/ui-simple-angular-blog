import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private router: Router) { }

shouldShowComponent(): boolean {
  // Check if the current route matches the desired route
  return this.router.url !== '/post-blog';
}
}
