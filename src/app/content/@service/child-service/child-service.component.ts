import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-child-service',
  templateUrl: './child-service.component.html',
  styleUrls: ['./child-service.component.scss']
})
export class ChildServiceComponent implements OnInit {
status = 'Chưa Có Nhận Được Tiền của Bố!'
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    if(this.service.data){
      this.status = 'Đã Nhận Được Tiền của Bố'
    }
  }

}
