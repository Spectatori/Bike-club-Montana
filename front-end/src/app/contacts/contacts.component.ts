import { Component } from '@angular/core';
import {NavComponent} from "../../layouts/nav/nav.component";
import {SideMenuComponent} from "../../layouts/side-menu/side-menu.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NavComponent,
    SideMenuComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
