import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  componentClass: string= 'dark-theme';
  
  constructor( private ThemeService: ThemeService )
   { }

  ngOnInit() {
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentClass = componentClass;
    })
  }

  public onThemeChange(e:string){
    this.ThemeService.onChange(e);
  } 

}
