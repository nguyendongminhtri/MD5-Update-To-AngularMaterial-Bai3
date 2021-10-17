import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parent-service',
  templateUrl: './parent-service.component.html',
  styleUrls: ['./parent-service.component.scss']
})
export class ParentServiceComponent implements OnInit {

  constructor(private service: ServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.service.setData(true)
    this.router.navigate(['child-service'])
  }
}
