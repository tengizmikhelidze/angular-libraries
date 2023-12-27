import {Component} from '@angular/core';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly environment = environment;
  readonly facebookIcon = faFacebook;
  readonly instagramIcon = faInstagram;
}
