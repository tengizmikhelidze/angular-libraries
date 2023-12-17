import {Component} from '@angular/core';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly facebookIcon = faFacebook
  readonly instagramIcon = faInstagram
}
