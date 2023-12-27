import {Component} from '@angular/core';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {environment} from "../../../environments/environment";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [FontAwesomeModule, RouterModule]
})
export class FooterComponent {
  readonly environment = environment;
  readonly facebookIcon = faFacebook;
  readonly instagramIcon = faInstagram;
}
