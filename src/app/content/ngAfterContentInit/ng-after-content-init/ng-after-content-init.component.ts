import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  templateUrl: './ng-after-content-init.component.html',
  styleUrls: ['./ng-after-content-init.component.scss']
})
export class NgAfterContentInitComponent implements OnInit {

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
  clickMe(){
    console.log("link clicked")
    //Sau click thi ngAfterContentInit khong duoc goi nua dau nhe!
  }
  //ngAfterContentInit () chạy một lần sau ngDoCheck () đầu tiên .
  // Trong ví dụ trên, ngAfterContentInit () chạy sau ngOnInit và ngDoCheck.
  // Lưu ý cách ngAfterContentInit () chỉ được gọi một lần. Kích hoạt hàm clickMe () sẽ không chạy ngAfterContentInit ().
  // Khi nào bạn nên sử dụng ngAfterContentInit?
  // Sử dụng ngAfterContentInit để gọi nội dung một lần sau khi tất cả nội dung đã được khởi tạo.
  // ngAfterContentInit sẽ chạy một lần sau ngDoCheck () đầu tiên .
}
