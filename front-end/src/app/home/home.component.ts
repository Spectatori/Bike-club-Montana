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

  public infoSlides= [
    {src: 'assets/pictures/champagne.png', alt:'champagne'},
    {src: 'assets/pictures/tester.png', alt:'tester'},
  ]
  infoCurrentIndex = 0;
  infoNextSlide(){
    this.infoCurrentIndex = (this.infoCurrentIndex + 1) % this.infoSlides.length;
  }
  infoPrevSlide(){
    this.infoCurrentIndex = (this.infoCurrentIndex - 1 + this.infoSlides.length) % this.infoSlides.length;
  }

  public winnerSlides= [
    {src: 'assets/pictures/winner.jpg', alt:'winner', description:'„Огоста DH 2023“',winners:[{first:"1.Test Testov Testov1", second:"2.Test Testov", third:"3.Test"}]},
    {src: 'assets/pictures/tester.png', alt:'tester', description:'test' ,winners:[{first:"1.Test Testov Testov2", second:"2.Test Testov", third:"3.Test"}]},
  ]
  winnerCurrentIndex = 0;
  winnerNextSlide(){
    this.winnerCurrentIndex = (this.winnerCurrentIndex + 1) % this.winnerSlides.length;
  }
  winnerPrevSlide(){
    this.winnerCurrentIndex = (this.winnerCurrentIndex - 1 + this.winnerSlides.length) % this.winnerSlides.length;
  }
}
