import { Component } from '@angular/core';
import {faLanguage} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly transliteration = faLanguage;

}
