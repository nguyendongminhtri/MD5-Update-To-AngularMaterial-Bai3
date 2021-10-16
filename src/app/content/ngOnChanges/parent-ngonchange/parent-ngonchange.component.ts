import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ngonchange',
  templateUrl: './parent-ngonchange.component.html',
  styleUrls: ['./parent-ngonchange.component.scss']
})
export class ParentNgonchangeComponent implements OnInit {
  data = 0
  num = 0;
  constructor() { }

  ngOnInit(): void {
    console.log('goi ngOnInit')
    this.num = 8;
    console.log('num = ', this.num)
  }
  changeFromParent(){
    this.data += 1;
  }
}
