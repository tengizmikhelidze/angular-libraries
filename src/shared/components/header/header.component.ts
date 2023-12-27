import {Component} from '@angular/core';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {environment} from "../../../environments/environment";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import {ImgSrcRewriteDirective} from "../../directives/img-src-rewrite.directive";
import {faBurger} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [FontAwesomeModule, RouterModule, ImgSrcRewriteDirective]
})
export class HeaderComponent {
  readonly environment = environment;
  readonly facebookIcon = faFacebook;
  readonly instagramIcon = faInstagram;
  readonly burgerMenuIcon = faBurger;
}
