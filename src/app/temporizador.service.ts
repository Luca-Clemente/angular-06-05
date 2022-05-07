import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private timer: any;
  private counter = 0;

  constructor() { }

  start(ns :number){
    if(!this.timer){
      this.counter = 0;
      this.timer = setInterval(()=>{
        this.counter++;
      }, ns);
    }
  }
  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  getCount(){
    return this.counter;
  }
}