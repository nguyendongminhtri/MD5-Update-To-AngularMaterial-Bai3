import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ngdocheck',
  templateUrl: './parent-ngdocheck.component.html',
  styleUrls: ['./parent-ngdocheck.component.scss']
})
export class ParentNgdocheckComponent implements OnInit {
  user = {
    name:"Alex"
  }
  constructor() { }

  ngOnInit(): void {
  }
  updateUser(){
    this.user.name = 'chinh'
  }
}
