import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-checked',
  templateUrl: './ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-checked.component.scss']
})
export class NgAfterViewCheckedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentInit(){
    console.log("after content init");
  }
  ngAfterViewChecked(){
    console.log("after view checked")
  }
  clickMe(){
    console.log("link clicked")
  }
  //ngAfterViewChecked () được gọi sau ngAfterContentInit
  // ngAfterViewChecked () được gọi sau mỗi ngAfterContentChecked tiếp theo.
  // Kích hoạt hàm clickMe () sẽ kích hoạt ngAfterViewChecked ()
  // Khi nào bạn nên sử dụng ngAfterViewChecked?
  // ngAfterViewChecked hữu ích khi bạn muốn gọi một móc vòng đời sau khi tất cả các thành phần con đã được khởi tạo và kiểm tra.
}
