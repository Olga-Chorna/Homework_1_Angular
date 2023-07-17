import { Component } from '@angular/core';

@Component({
  selector: 'app-more-quotes',
  templateUrl: './more-quotes.component.html',
  styleUrls: ['./more-quotes.component.css']
})
export class MoreQuotesComponent {
  quotes: string[]= [
    "If you think your teacher is tough, wait till you get boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people in thinking they can't lose.",
    "Be nice to nerds.."
];
}
