import {Component} from '@angular/core';
import {BurgerMenuService} from "./services/burger-menu.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faBurger, faX} from "@fortawesome/free-solid-svg-icons";
import {environment} from "../../../environments/environment";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  imports: [
    AsyncPipe,
    NgIf,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class BurgerMenuComponent {
  readonly environment = environment;
  readonly closeIcon = faX;
  readonly facebookIcon = faFacebook;
  readonly instagramIcon = faInstagram;
  readonly burgerMenuIcon = faBurger;
  constructor(public burgerMenuService: BurgerMenuService) {}
}
