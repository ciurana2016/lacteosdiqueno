import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
    if (this.videoUrl === undefined) {
      this.videoUrl = 'https://www.youtube-nocookie.com/embed/rx0hTvDKsQU?rel=0&amp;showinfo=0&autoplay=0';
    }
  }

}
