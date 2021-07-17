import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

 componentClass: string = 'dark-theme';
 
 private setClass = new Subject<string>();
 changeClass = this.setClass.asObservable();
  
  onChange(e:string){
    this.componentClass = e;
    this.setClass.next(e);

  } 
}
