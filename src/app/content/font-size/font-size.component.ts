import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }
  //Cach 2
  // changeFontSizeValue(fontSize: any) {
  //   this.fontSize = fontSize;
  // }
}
