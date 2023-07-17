import { Component } from '@angular/core';

@Component({
  selector: 'app-first-quote',
  templateUrl: './first-quote.component.html',
  styleUrls: ['./first-quote.component.css']
})
export class FirstQuoteComponent {
  quote: string = "Patience is a key element of success";
}
