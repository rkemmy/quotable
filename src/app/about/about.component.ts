import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  quotes = ['If you think education is expensive, try ignorance!', 'Don’t fake it till you make it. Fake it till you become it.', 'All things are difficult before they are easy.']

  inputQuote = null;
  btnDisable = false;
  Adding = false;

  CreateQuote(){
    this.quotes.push(this.inputQuote)
    this.inputQuote = null
    this.Adding = false
    
  }

  AddQuote(){
    this.Adding = !this.Adding
  }

  constructor() { }

  ngOnInit() {
  }

}
