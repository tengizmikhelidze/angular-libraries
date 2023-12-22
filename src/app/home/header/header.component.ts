import {Component} from '@angular/core';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly environment = environment;
  readonly facebookIcon = faFacebook;
  readonly instagramIcon = faInstagram;
}
