import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { pedidoInterface } from 'src/app/model/pedido.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  @HostBinding('class') componentCssClass: string = 'dark-theme';
  ordenes:pedidoInterface[] = [];

  constructor(
    private ThemeService: ThemeService,
    private firestoreService: FirestoreService 
  ) { }

  ngOnInit(): void {
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentCssClass = componentClass;
    });
    this.getOrders();
  }

  getOrders(){
    this.firestoreService.getOrdersRegister().subscribe( orderSnapshot => {
      orderSnapshot.forEach((data: any) => {
        if (data.payload.doc.data().estado == 'listo'){
          this.ordenes.push(data.payload.doc.data());
          let last = this.ordenes.length - 1;
          this.ordenes[last].id =  data.payload.doc.id;
        }
      })
    });
  }
}
