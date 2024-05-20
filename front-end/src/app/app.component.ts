import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isExpanded = false;
  menuItems=[
    {src: 'assets/icons/home.svg', alt:'home', link:''},
    {src: 'assets/icons/settings.svg', alt:'settings', link:''},
    {src: 'assets/icons/settings.svg', alt:'settings', link:''}
  ]
  expandMenu(){
    this.isExpanded = true;
  }
  collapseMenu(){
    this.isExpanded = false;
  }
}
