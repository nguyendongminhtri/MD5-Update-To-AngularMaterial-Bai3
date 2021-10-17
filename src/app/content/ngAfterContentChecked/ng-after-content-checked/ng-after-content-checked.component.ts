import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked',
  templateUrl: './ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-checked.component.scss']
})
export class NgAfterContentCheckedComponent implements OnInit {

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
  ngAfterContentChecked(){
    console.log("after content checked")
  }

  clickMe(){
    console.log("link clicked")
  }
  //ngAfterContentChecked () được gọi trực tiếp sau ngDoCheck()
  // ngAfterContentChecked () được gọi sau mỗi ngDoCheck tiếp theo
  // Trong ví dụ trên, ngAfterContentChecked () được gọi sau ngDoCheck. ngAfterContentChecked () cũng sẽ được gọi bất cứ lúc nào hàm clickMe () được kích hoạt.
  //Khi nào bạn nên sử dụng ngAfterContentChecked?
  // Sử dụng ngAfterContentChecked bất cứ khi nào bạn muốn gọi một hook sự kiện vòng đời ngay sau ngDoCheck.
  // ngAfterContentChecked có thể hữu ích nếu bạn muốn triển khai các tác vụ khởi tạo bổ sung sau khi Angular đã khởi tạo đầy đủ nội dung của thành phần / chỉ thị.
}
