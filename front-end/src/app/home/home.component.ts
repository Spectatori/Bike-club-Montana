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
    {
      src: 'assets/pictures/winner.jpg',
      alt:'winner',
      description:'„Огоста DH 2023“',
      winners:[
        {
          first:
            {
              name:"1. Olivia Carter",
              achievements:"Winner of the \"Mountain Trail Challenge 2023\"",
              description:"John showcased exceptional endurance and skill, conquering the rugged terrain with unmatched determination. His victory is a testament to his dedication and love for mountain biking."
            },
          second:
            {
              name:"2. Liam Johnson",
              achievements:"Champion of the \"City Sprint Race 2023\"",
              description:"Jane's lightning-fast speed and strategic maneuvers led her to triumph in the highly competitive city sprint race. Her win highlights her agility and tactical prowess in urban cycling.",
          },
          third:
            {
              name:"3. Sophia Martinez",
              achievements:"First Place in the \"Coastal Cruise Marathon 2023\"",
              description:"Mark demonstrated incredible stamina and consistency throughout the marathon, navigating the scenic coastal routes with ease. His achievement underscores his passion for long-distance cycling and his exceptional physical fitness.",
          }
        }]
    },
    {
      src: 'assets/pictures/tester.png',
      alt:'tester', description:'test' ,
      winners:[
        {
          first:
            {
              name:"1. Ethan Thompson",
              achievements:"Winner of the \"Cross-Country Cycling Championship 2023\"",
              description: "Marcus exhibited exceptional endurance and agility throughout the Cross-Country Cycling Championship. His strategic navigation through challenging terrains and relentless pace secured him the top spot, underscoring his commitment and prowess in competitive cycling."
            },
          second:
            {
              name:"2. Ava Roberts",
              achievements:"Champion of the \"City Sprint Series 2023\"",
              description:"Sofia clinched the title in the City Sprint Series with her remarkable speed and precision. Her ability to maneuver through urban obstacles and maintain peak performance in high-speed sprints demonstrates her elite skill and training in competitive cycling.",
            },
          third:
            {
              name:"3. Noah Williams",
              achievements:"First Place in the \"Mountain Enduro Race 2023\"",
              description:"Jake's victory in the Mountain Enduro Race was a testament to his technical skill and resilience. Mastering the steep descents and rugged trails, his exceptional bike handling and strategic riding secured him the first-place position, highlighting his expertise in enduro cycling.",
            }
        }]
    },
  ]
  winnerCurrentIndex = 0;
  winnerNextSlide(){
    this.winnerCurrentIndex = (this.winnerCurrentIndex + 1) % this.winnerSlides.length;
  }
  winnerPrevSlide(){
    this.winnerCurrentIndex = (this.winnerCurrentIndex - 1 + this.winnerSlides.length) % this.winnerSlides.length;
  }
}
