import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  quote = 'If you think education is expensive, try ignorance!'

  inputQuote = null;

  btnDisable = false;

  ChangeQuote(){
    this.quote = this.inputQuote
  }

  constructor() { }

  ngOnInit() {
  }

}
