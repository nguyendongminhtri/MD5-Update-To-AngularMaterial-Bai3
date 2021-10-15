import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.scss']
})
export class ParentOutputComponent implements OnInit {
vote: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
voteChange(event: any){
    this.vote = event;
}
}
