import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor(private ngFirestore: AngularFirestore) { }
  registerGeo(latitude: string, longitude: string){
    return this.ngFirestore.collection('location').add({user:"BrendaA",latitude, longitude});
  }
}
