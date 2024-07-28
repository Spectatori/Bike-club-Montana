import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccessComponent} from "./access/access.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'access', component:AccessComponent},
  { path:'contacts', component:ContactsComponent},
  { path:'about', component:AboutComponent},
];
