import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  isExpanded = false;
  menuItems=[
    {src: 'assets/icons/contacts.svg', alt:'contacts', link:'/contacts'},
    {src: 'assets/icons/about.svg', alt:'about', link:'/about'},
    {src: 'assets/icons/home.svg', alt:'home', link:''},
    {src: 'assets/icons/login.svg', alt:'login', link:'access'},
    {src: 'assets/icons/login.svg', alt:'login', link:'access'},
  ]
  expandMenu(){
    this.isExpanded = true;
  }
  collapseMenu(){
    this.isExpanded = false;
  }
}
