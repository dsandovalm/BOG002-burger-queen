import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-entregar',
  templateUrl: './entregar.component.html',
  styleUrls: ['../form.component.scss']
})
export class EntregarComponent implements OnInit {

  state:string = '';
  id:string = '';

  constructor(
    private popupService : PopUpsService,
    private estadoMesas : EstadosMesaService,
    private firestoreService : FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.changeId.subscribe((ordenId) => {
      this.id = ordenId;
    })
  }
  
  goBack(){
    this.popupService.closePopUp()
  }

  handOver(){
    this.state = 'listo';
    if(this.id){
      this.firestoreService.setState(this.state,this.id);
    }
    this.popupService.closePopUp();
  }
}
