import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-ngonchange',
  templateUrl: './child-ngonchange.component.html',
  styleUrls: ['./child-ngonchange.component.scss']
})
export class ChildNgonchangeComponent implements OnInit {
  @Input() parentData: any;
  constructor() { }

  ngOnInit(): void {
    this.parentData = 9; //ngOnChanges duoc goi truoc ca ngOnInit voi @Input
  }
  changeFromChild(){
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes ---> ',changes)
  }
  //ngOnChanges duoc su dung kem voi @Input khi co su thay doi tu component Cha
  //Component con se khong goi ngOnChange
}
