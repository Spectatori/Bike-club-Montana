import { Component,} from '@angular/core';
import {NgOptimizedImage, NgForOf} from "@angular/common";
import {FooterComponent} from "../../layouts/footer/footer.component";
import {SideMenuComponent} from "../../layouts/side-menu/side-menu.component";
import {NavComponent} from "../../layouts/nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    FooterComponent,
    SideMenuComponent,
    NavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public slides= [
    {src: 'assets/pictures/champagne.png', alt:'champagne'},
    {src: 'assets/pictures/tester.png', alt:'tester'},
  ]
  currentIndex = 0;
  nextSlide(){
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  prevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
