import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ngondestroy',
  templateUrl: './parent-ngondestroy.component.html',
  styleUrls: ['./parent-ngondestroy.component.scss']
})
export class ParentNgondestroyComponent implements OnInit {
  public showChild = true;
  update(){
    this.showChild = !this.showChild
  }
  constructor() { }

  ngOnInit(): void {
    console.log("parent init")
  }

}
