import { Component, OnInit } from '@angular/core';
import {Pet} from "./Pet";
import {Pets} from "./Pets";


@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.scss']
})
export class ShowPetComponent implements OnInit {
  pet: Pets = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
// export interface Pet {
//   name?: string;
//   image?: string;
// }
