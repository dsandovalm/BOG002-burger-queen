import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() titulo:any = '';
  @Input() items:any[] = [];

  constructor() { 

  }

  ngOnInit(): void {

  }

}
