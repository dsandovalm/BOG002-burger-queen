import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  /* Almacenar pedidos */
  public setOrder(orden: string) {
    return this.firestore.collection('pedidos').add({orden});
  }

}
