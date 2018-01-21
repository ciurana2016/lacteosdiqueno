import { Component, OnInit, Input } from '@angular/core';

import { NgXCookies } from 'ngx-cookies';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  homeVideoUrl = 'https://www.youtube-nocookie.com/embed/rx0hTvDKsQU?rel=0&amp;showinfo=0&autoplay=';

  // Url de video a insertar
  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
    this.setHomeViudeoUrl();
  }

  /**
   * Añadimos una cookie para determinar si el video de la home ha
   * de estar en autoplay o no. Asi siempre en la primera visita estara en auto,
   * y todas las siguientes normal.
   */
  setHomeViudeoUrl() {
    if (this.videoUrl === undefined) {
      if (!NgXCookies.exists('autoplayed')) {
        this.videoUrl = this.homeVideoUrl + '1';
        NgXCookies.setCookie('autoplayed', '1', 365, 'days');
      } else {
        this.videoUrl = this.homeVideoUrl + '0';
      }
    }
  }

}
