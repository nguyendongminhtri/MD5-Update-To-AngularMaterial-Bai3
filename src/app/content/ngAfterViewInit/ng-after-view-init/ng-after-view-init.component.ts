import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.scss']
})
export class NgAfterViewInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentChecked(){
    console.log("after content checked")
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  clickMe(){
    console.log("link clicked")
  }
  //Trong ví dụ trên, ngAfterViewInit () được gọi một lần sau khi ngDoCheck .
  // Kích hoạt hàm clickMe () SẼ KHÔNG kích hoạt ngAfterViewInit () .
  // Khi nào bạn nên sử dụng ngAfterViewInit?
  // ngAfterViewInit hữu ích khi bạn muốn gọi một móc vòng đời
  // sau khi tất cả các thành phần con đã được khởi tạo và kiểm tra.
}
