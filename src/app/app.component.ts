import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
                state('in', style({
                    opacity: 1,
                })),
                transition('void => *', [
                    style({
                        opacity: 0,
                    }),
                    animate(250)
                ]),
                transition('* => void', [
                    animate(250, style({
                        opacity: 0,
                    }), )
                ])
        ])
    ]
})
export class AppComponent implements OnInit {

    // Comprobar si tenemos internet
    onlineObservable: Observable<boolean>;
    onlineToggle: boolean;

    ngOnInit() {
      this.observeOnline();
    }

    observeOnline() {
      this.onlineObservable = Observable.merge(
        Observable.of(navigator.onLine),
        Observable.fromEvent(window, 'online').mapTo(true),
        Observable.fromEvent(window, 'offline').mapTo(false)
      );
      this.onlineObservable.subscribe((online) => {
          this.onlineToggle = online;
      });
    }


}
