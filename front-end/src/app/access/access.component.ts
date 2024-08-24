import { Component } from '@angular/core';
import {NavComponent} from "../../layouts/nav/nav.component";
import {SideMenuComponent} from "../../layouts/side-menu/side-menu.component";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [
    NavComponent,
    SideMenuComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {
  accessIndex = 0;
  AccessChange(){
    this.accessIndex = (this.accessIndex + 1) % 2
    console.log(this.accessIndex)
  }
  user = {
    username:'',
    password:'',
    email:'',
  }
}
