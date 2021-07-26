import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { PopUpsService } from 'src/app/services/pop-ups.service';

@Component({
  selector: 'app-entregar',
  templateUrl: './entregar.component.html',
  styleUrls: ['../form.component.scss']
})
export class EntregarComponent implements OnInit {

  constructor(
    private popupService : PopUpsService,
    private estadoMesas : EstadosMesaService
  ) { }

  ngOnInit(): void {
  }
  goBack(){
    this.popupService.closePopUp()
  }

  handOver(){
    this.popupService.closePopUp();
    
  }

}
