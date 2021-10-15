import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() data?: string[];
  // @Output()
  // giveURLtoCreate = new EventEmitter();
  // counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // voted() {
  //   this.counter ++;
  //   this.giveURLtoCreate.emit(this.counter);
  //   // Hàm vote sẽ tăng counter lên 1, đồng thời thông qua EventEmitter bắn value counter này ra component cha
  // }

}
