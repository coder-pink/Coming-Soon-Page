import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
// intialize count string ---
  countdays: string = '';
  counthours : string = '';
  countminutes : string = '';
  countseconds : string = '';
  constructor(){}

  ngOnInit(): void {
    // the target date ----
  const targetDate = new Date('2023-10-31T00:00:00').getTime();

  // updating count -----
  const  countInterval = setInterval(() =>{
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// formatting  strings
    this.countdays = `${days}`;
    this.counthours = `${hours}`;
    this.countminutes = `${minutes}`;
    this.countseconds = `${seconds}`;

  },1000)
  }

}
