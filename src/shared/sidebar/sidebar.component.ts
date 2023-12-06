import {Component} from '@angular/core';
import {faHouseChimneyWindow, faLanguage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class SidebarComponent {
  readonly homeIcon = faHouseChimneyWindow;
  readonly transliteration = faLanguage;
}
