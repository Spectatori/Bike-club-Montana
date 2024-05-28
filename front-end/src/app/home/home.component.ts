import { Component,} from '@angular/core';
import {NgOptimizedImage, CommonModule, NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public slides= [
    {src: 'assets/pictures/champagne.png'},
    {src: 'assets/pictures/tester.png'},
  ]
  currentIndex = 0;
  nextSlide(){
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  prevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
