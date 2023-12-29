import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent {
  readonly environment = environment;

  scroll() {
    let scroll = document.getElementById("services-scroll")
    scroll?.scrollIntoView({behavior: 'smooth'})
  }
}
