import {Component} from '@angular/core';
import {PageServicesList} from "../../../shared/types/page-service.types";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  pageServices: PageServicesList = [
    {
      href: environment.youtubeUrl,
      imgSrc: 'assets/images/site-logo.jpg',
      title: 'Angular-ის ქართული კურსი',
      target: '_self'
    },
    {
      href: 'https://npmjs.com/package/ngx-transliteration',
      imgSrc: 'assets/images/npm.webp',
      title: 'ngx-transliteration NPM',
      target: '_blank'
    },
    {
      href: 'https://github.com/tengizmikhelidze/Georgian-Cities/blob/main/db.json',
      imgSrc: 'assets/images/github.png',
      title: 'საქართველოს ქალაქები JSON',
      target: '_blank'
    },
  ]
}
