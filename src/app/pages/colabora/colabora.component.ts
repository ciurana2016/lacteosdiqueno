import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colabora',
  templateUrl: './colabora.component.html',
  styleUrls: ['./colabora.component.scss']
})
export class ColaboraComponent implements OnInit {

  posters = [ 1, 2, 3, 4, 5 ];

  constructor() { }

  ngOnInit() {
  }

}
