import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public data?: boolean;
  constructor() { }

  setData(data: boolean){
    this.data = data;
  }
  getData(){
    return this.data;
  }
}
