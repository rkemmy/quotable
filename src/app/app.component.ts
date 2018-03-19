import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AddQuote(author: HTMLInputElement, quote: HTMLInputElement): boolean {
console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  title = 'app';
  }
}
