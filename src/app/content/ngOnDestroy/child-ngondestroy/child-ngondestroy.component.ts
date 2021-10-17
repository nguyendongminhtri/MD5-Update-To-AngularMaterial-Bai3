import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-ngondestroy',
  templateUrl: './child-ngondestroy.component.html',
  styleUrls: ['./child-ngondestroy.component.scss']
})
export class ChildNgondestroyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("child init")
  }
  ngOnDestroy(){
    console.log("destroying child...")
  }
  //ngOnDestroy () được gọi khi một thành phần sắp bị hủy.
  // Lưu ý cách ví dụ "hủy" thành phần con thông qua điều kiện ngIf = 'showChild'
  //Khi nào thì bạn nên sử dụng ngOnDestroy?
  // Sử dụng ngOnDestroy có ý nghĩa khi bạn muốn triển khai hành vi tùy chỉnh khi một thành phần bị phá hủy.
  // ngOnDestroy có thể hữu ích khi bạn cần hủy đăng ký khỏi các trang có thể quan sát
  // hoặc thực hiện bất kỳ thao tác dọn dẹp nào khác khi hủy một thành phần.
}
