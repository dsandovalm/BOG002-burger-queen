import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.scss']
})
export class CocinaComponent implements OnInit {

  @HostBinding('class') componentCssClass: string = 'dark-theme';

  constructor(private ThemeService: ThemeService) { }

  ngOnInit(): void {
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentCssClass = componentClass;
    })

  }

}
