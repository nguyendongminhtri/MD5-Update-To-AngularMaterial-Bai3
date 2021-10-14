import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  fruits = ['Mengo', 'Orange', 'Banana'];
  constructor() { }

  ngOnInit(): void {
  }
  addFruit(item: any) {
    console.log('luong 1')
    this.fruits.push(item);
  }
}
