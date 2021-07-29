import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { pedidoInterface } from 'src/app/model/pedido.model';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.scss']
})
export class CocinaComponent implements OnInit {

  @HostBinding('class') componentCssClass: string = 'dark-theme';

  ordenes:pedidoInterface[] = [];
  cocinando:pedidoInterface[] = [];
  state: string = 'cocina';
  
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
    this.firestoreService.getOrdersRegister().subscribe( (orderSnapshot: any) => {
    //  orderSnapshot.forEach((data: any) => {  -- No es necesario el forEach
        this.ordenes = orderSnapshot
          .filter( (item:any) => item.payload.doc.data().estado == 'registrado')
          .map((item:any) => (
            {
              ...item.payload.doc.data(),
              id : item.payload.doc.id
            }
          ))
        this.cocinando = orderSnapshot
          .filter((item:any) => item.payload.doc.data().estado == 'cocinando')
          .map((item:any) => (
            {
              ...item.payload.doc.data(),
              id : item.payload.doc.id
            }
          ))
        
        /*if (data.payload.doc.data().estado == 'registrado'){ // cambiar por filter 
          this.ordenes.push(data.payload.doc.data());
          let last = this.ordenes.length - 1;
          this.ordenes[last].id =  data.payload.doc.id;
          console.log(this.ordenes[last]);
        } else if (data.payload.doc.data().estado == 'cocinando'){
          this.cocinando.push(data.payload.doc.data());
          let last = this.cocinando.length - 1;
          this.cocinando[last].id =  data.payload.doc.id;
        }*/
      
      })
    };
  }


