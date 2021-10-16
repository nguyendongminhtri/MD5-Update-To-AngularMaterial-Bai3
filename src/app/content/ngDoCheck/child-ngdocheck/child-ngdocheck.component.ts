import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-ngdocheck',
  templateUrl: './child-ngdocheck.component.html',
  styleUrls: ['./child-ngdocheck.component.scss']
})
export class ChildNgdocheckComponent implements OnInit {
  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("CHANGES")
  }
  ngDoCheck(){
    console.log("DO CHECK")
  }
  //ngDoCheck () được gọi bất cứ khi nào chạy phát hiện thay đổi.
  // ngDoCheck () được gọi ngay sau ngOnChanges () và ngOnInit ()
  //Khi nào bạn nên sử dụng ngDoCheck?
  // Sử dụng ngDoCheck khi bạn muốn nắm bắt các thay đổi mà Angular không có.
  // Ví dụ: nếu tham chiếu liên kết không thay đổi sau sự kiện nhấp chuột,
  // ngOnChanges sẽ không chạy nhưng ngDoCheck sẽ chạy.
}
