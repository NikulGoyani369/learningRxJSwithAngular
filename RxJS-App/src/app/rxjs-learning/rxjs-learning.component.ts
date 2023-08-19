import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface SabhaAttendence {
  name: string;
  lastName: string;
  location: string;
}
@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.sass'],
})
export class RxjsLearningComponent implements OnInit {
  agents: Observable<string> | undefined;
  agentName: string | undefined;

  sabhaAttendeance: Observable<SabhaAttendence> | undefined;
  sabhaAttendi: SabhaAttendence | undefined;

  constructor() {}
  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next('VarunBhai ThaKer');

        setInterval(() => {
          observer.next('Nimit Thvanu che');
        }, 3000);

        setInterval(() => {
          observer.next(
            'P.PrabodhSwamiji ye Kanada ma Kahyu ke Nimit thai ne seva krvani che 2023'
          );
        }, 6000);
      } catch (e) {
        observer.error(e);
      }
    });

    this.agents.subscribe((data) => {
      this.agentName = data;
      console.log('Current data', data);
    });

    this.sabhaAttendeance = new Observable<SabhaAttendence>(function (
      bhaktoBerlin
    ) {
      try {
        const regualtAttendi: SabhaAttendence = {
          name: 'Varun',
          lastName: 'Thakur Bhai',
          location: 'Akshardham',
        };

        bhaktoBerlin.next(regualtAttendi);
      } catch (e) {
        bhaktoBerlin.error(e);
      }
    });

    this.sabhaAttendeance.subscribe((attendance) => {
      this.sabhaAttendi = attendance;

      console.log('Current data', attendance);
    });
  }
}
