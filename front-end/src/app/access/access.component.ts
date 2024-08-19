import { Component } from '@angular/core';
import {NavComponent} from "../../layouts/nav/nav.component";
import {SideMenuComponent} from "../../layouts/side-menu/side-menu.component";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [
    NavComponent,
    SideMenuComponent
  ],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {

}
