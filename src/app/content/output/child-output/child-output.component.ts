import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {
@Output()
callToParent = new EventEmitter();
count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
 vote(){
    this.count ++ ;
    this.callToParent.emit(this.count);
 }
}
