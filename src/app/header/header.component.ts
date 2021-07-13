import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /*private*/ rol :string = 'Mesa';
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
