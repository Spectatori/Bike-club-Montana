import { Component } from '@angular/core';
import {NavComponent} from "../../layouts/nav/nav.component";
import {NgOptimizedImage} from "@angular/common";
import {SideMenuComponent} from "../../layouts/side-menu/side-menu.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavComponent,
    NgOptimizedImage,
    SideMenuComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
