import { Component } from '@angular/core';
import {NavComponent} from "../../layouts/nav/nav.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
    imports: [
        NavComponent
    ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
